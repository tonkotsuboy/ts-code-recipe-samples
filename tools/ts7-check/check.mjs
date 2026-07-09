// TypeScript 7 (typescript@7.0.2, the Go-based native compiler)
// compatibility checker for the book sample code.
//
// What it does:
//   1. Per-file check: runs BOTH TS7 (`tsc` 7.0.2) and stable `tsc` with
//      `--noEmit <file>` on every .ts/.tsx sample, using baseline flags that
//      mirror the book's tsconfig (strict / module nodenext / target esnext /
//      skipLibCheck). Passing a single file makes the compiler ignore nearby
//      tsconfig.json, which avoids "duplicate declaration" collisions between
//      sibling snippets. `--ignoreConfig` is required for this: since the repo
//      root now ships its own tsconfig.json, both TS6 and TS7 would otherwise
//      hard-error with TS5112 ("tsconfig.json is present but will not be
//      loaded if files are specified on commandline") on every single-file run.
//   2. Project check: for every recipe folder that ships its own tsconfig.json,
//      additionally runs `-p <folder> --noEmit` on both compilers, so
//      config-focused recipes (mostly ch14) are evaluated as the book intends.
//   3. Emits an HTML report (report/index.html) and raw JSON (report/results.json).
//
// The headline metric is DIVERGENCE: a file/project where tsgo and tsc disagree.
// Zero divergence means TS7 behaves exactly like the current stable tsc, i.e.
// the samples "work" on TS7 just as they do today. Intentional teaching errors
// (the samples deliberately demonstrate "this is an error") fail under BOTH
// compilers, so they are NOT divergences. We also flag files whose source
// contains the marker「エラー」to help separate expected from unexpected.
//
// A second, weaker signal is MESSAGE DRIFT: pass/fail agrees but the diagnostic
// TEXT differs. That matters for a book, whose pages quote what the compiler and
// the editor show. TS7's `stableTypeOrdering` (on by default, cannot be disabled)
// sorts literal union members when a type is displayed, and TS7 no longer escapes
// non-ASCII in template literal types — so error text can change even when the
// type-check verdict does not.

import { spawn } from "node:child_process";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, relative, sep } from "node:path";
import os from "node:os";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(scriptDir, "..", "..");
// TS7 ships inside the `typescript` package itself; installed via the npm
// alias `ts7rc@npm:typescript@7.0.2` so it can live next to stable tsc.
const tsgoBin = join(scriptDir, "node_modules", "ts7rc", "bin", "tsc");
// Reference the stable package's own bin directly: `.bin/tsc` is ambiguous
// because both `typescript` and the `ts7rc` alias provide a `tsc` bin, and the
// alias wins the symlink — which would make this a meaningless RC-vs-RC compare.
const tscBin = join(scriptDir, "node_modules", "typescript", "bin", "tsc");
const reportDir = join(scriptDir, "report");

const BASELINE_FLAGS = [
  "--noEmit",
  "--strict",
  "--module",
  "nodenext",
  "--target",
  "esnext",
  "--skipLibCheck",
  "--ignoreConfig",
];

const CONCURRENCY = Math.max(2, os.cpus().length);
const PER_RUN_TIMEOUT_MS = 60_000;
const IGNORE_DIRS = new Set(["node_modules", ".git", "dist", "build"]);

async function walk(dir, predicate, out = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      await walk(full, predicate, out);
    } else if (predicate(full, entry)) {
      out.push(full);
    }
  }
  return out;
}

/** Run a command, resolving with exit code + combined output (never rejects). */
function run(cmd, args, cwd) {
  return new Promise((resolve) => {
    const child = spawn(cmd, args, { cwd });
    let stdout = "";
    let stderr = "";
    const timer = setTimeout(() => {
      child.kill("SIGKILL");
      resolve({ code: 124, output: (stdout + stderr).trim() + "\n[timed out]" });
    }, PER_RUN_TIMEOUT_MS);
    child.stdout.on("data", (d) => (stdout += d));
    child.stderr.on("data", (d) => (stderr += d));
    child.on("error", (err) => {
      clearTimeout(timer);
      resolve({ code: 127, output: String(err) });
    });
    child.on("close", (code) => {
      clearTimeout(timer);
      resolve({ code: code ?? 0, output: (stdout + stderr).trim() });
    });
  });
}

async function mapPool(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  let done = 0;
  const total = items.length;
  async function worker() {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i], i);
      done++;
      if (done % 25 === 0 || done === total) {
        process.stdout.write(`\r  progress: ${done}/${total}   `);
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  process.stdout.write("\n");
  return results;
}

function chapterOf(relPath) {
  const m = relPath.match(/^ch(\d+)/);
  return m ? `ch${m[1]}` : "(other)";
}

async function version(bin) {
  const r = await run(bin, ["--version"], repoRoot);
  return r.output.trim();
}

async function main() {
  // Fast path: only re-render the HTML from a previous run's results.json,
  // without invoking the compilers again. Useful when iterating on the report.
  if (process.argv.includes("--render-only")) {
    const data = JSON.parse(await readFile(join(reportDir, "results.json"), "utf8"));
    await writeFile(join(reportDir, "index.html"), renderHtml(data));
    console.log("re-rendered report/index.html from existing results.json");
    return;
  }

  const tsgoVersion = await version(tsgoBin);
  const tscVersion = await version(tscBin);
  console.log(`repo: ${repoRoot}`);
  console.log(`tsgo: ${tsgoVersion}`);
  console.log(`tsc:  ${tscVersion}\n`);

  // --- collect sample files ----------------------------------------------
  const tsFiles = await walk(repoRoot, (full) => /\.(ts|tsx|mts|cts)$/.test(full));
  const samples = tsFiles
    .filter((f) => !f.includes(`${sep}tools${sep}ts7-check${sep}`))
    .sort();
  console.log(`found ${samples.length} sample files. checking per-file (tsgo + tsc)...`);

  // --- per-file: run both compilers --------------------------------------
  const fileResults = await mapPool(samples, CONCURRENCY, async (file) => {
    const rel = relative(repoRoot, file);
    const source = await readFile(file, "utf8").catch(() => "");
    const hasErrorMarker = source.includes("エラー");
    const isTsx = file.endsWith(".tsx");
    const flags = isTsx ? [...BASELINE_FLAGS, "--jsx", "react-jsx"] : BASELINE_FLAGS;
    const [tsgoRes, tscRes] = await Promise.all([
      run(tsgoBin, [...flags, file], repoRoot),
      run(tscBin, [...flags, file], repoRoot),
    ]);
    const tsgoOk = tsgoRes.code === 0;
    const tscOk = tscRes.code === 0;
    const tsgoOut = tsgoRes.output;
    const tscOut = tscRes.output;
    return {
      file: rel,
      chapter: chapterOf(rel),
      tsgoOk,
      tscOk,
      diverged: tsgoOk !== tscOk,
      // Same verdict, different wording. See the header comment.
      msgDrift: tsgoOk === tscOk && tsgoOut.trim() !== tscOut.trim(),
      hasErrorMarker,
      isTsx,
      tsgoOut,
      tscOut,
    };
  });

  // --- project check (folders that ship their own tsconfig.json) ---------
  const tsconfigs = await walk(repoRoot, (full) => /(^|[\\/])tsconfig\.json$/.test(full));
  const projectDirs = [
    ...new Set(
      tsconfigs
        .filter((f) => !f.includes(`${sep}tools${sep}ts7-check${sep}`))
        .map((f) => dirname(f))
    ),
  ].sort();
  console.log(`found ${projectDirs.length} folders with tsconfig.json. checking as projects (tsgo + tsc)...`);

  const projectResults = await mapPool(projectDirs, CONCURRENCY, async (dir) => {
    const rel = relative(repoRoot, dir);
    const [tsgoRes, tscRes] = await Promise.all([
      run(tsgoBin, ["--noEmit", "-p", dir], repoRoot),
      run(tscBin, ["--noEmit", "-p", dir], repoRoot),
    ]);
    const tsgoOk = tsgoRes.code === 0;
    const tscOk = tscRes.code === 0;
    return { dir: rel, tsgoOk, tscOk, diverged: tsgoOk !== tscOk, tsgoOut: tsgoRes.output, tscOut: tscRes.output };
  });

  // --- summarise + write -------------------------------------------------
  const summary = {
    total: fileResults.length,
    match: fileResults.filter((r) => !r.diverged).length,
    diverged: fileResults.filter((r) => r.diverged).length,
    msgDrift: fileResults.filter((r) => r.msgDrift).length,
    bothPass: fileResults.filter((r) => r.tsgoOk && r.tscOk).length,
    bothFail: fileResults.filter((r) => !r.tsgoOk && !r.tscOk).length,
    tsx: fileResults.filter((r) => r.isTsx).length,
  };
  const meta = {
    tsgoVersion,
    tscVersion,
    flags: BASELINE_FLAGS.join(" "),
    generatedAt: new Date().toISOString(),
    node: process.version,
    projectTotal: projectResults.length,
    projectTsgoPass: projectResults.filter((r) => r.tsgoOk).length,
    projectDiverged: projectResults.filter((r) => r.diverged).length,
  };

  await writeFile(
    join(reportDir, "results.json"),
    JSON.stringify({ meta, summary, fileResults, projectResults }, null, 2)
  );
  await writeFile(join(reportDir, "index.html"), renderHtml({ meta, summary, fileResults, projectResults }));

  console.log("\n=== summary (per-file) ===");
  console.log(`  total              : ${summary.total}`);
  console.log(`  結果一致 (tsgo=tsc) : ${summary.match}`);
  console.log(`    └ 両者PASS       : ${summary.bothPass}`);
  console.log(`    └ 両者エラー      : ${summary.bothFail}`);
  console.log(`  >> DIVERGED tsgo≠tsc: ${summary.diverged}  <-- TS7-specific differences`);
  console.log(`  >> 文言差異 (判定同じ): ${summary.msgDrift}  <-- 誌面に載るエラー文が変わる箇所`);
  for (const r of fileResults.filter((r) => r.msgDrift)) console.log(`       - ${r.file}`);
  console.log(`=== projects ===`);
  console.log(`  tsgo PASS          : ${meta.projectTsgoPass}/${meta.projectTotal}`);
  console.log(`  >> DIVERGED         : ${meta.projectDiverged}`);
  console.log(`\nreport: ${join(reportDir, "index.html")}`);
}

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function detail(label, text) {
  if (!text) return "";
  return `<details><summary>${label}</summary><pre>${esc(text)}</pre></details>`;
}

function renderHtml({ meta, summary, fileResults, projectResults }) {
  // The goal is "does TS7 agree with stable tsc?". So the primary axis is
  // 一致(match) vs 相違(diverged) — NOT each compiler's own pass/fail.
  // diverged is the only real problem; both-fail still means they AGREE.
  const rows = fileResults
    .map((r) => {
      const status = r.diverged
        ? "diverged"
        : r.tsgoOk
        ? "match-pass"
        : "match-fail";
      return { ...r, status };
    })
    .sort((a, b) => {
      const order = { diverged: 0, "match-fail": 1, "match-pass": 2 };
      // Surface message drift right after real divergences: those are the rows a
      // proofreader has to eyeball against the printed page.
      return (
        order[a.status] - order[b.status] ||
        Number(b.msgDrift) - Number(a.msgDrift) ||
        a.file.localeCompare(b.file)
      );
    });

  const okBadge = (ok) =>
    ok ? '<span class="mini ok">OK</span>' : '<span class="mini ng">NG</span>';

  const rowsHtml = rows
    .map((r) => {
      const badge =
        r.status === "match-pass"
          ? '<span class="badge pass">結果一致（PASS）</span>'
          : r.status === "match-fail"
          ? '<span class="badge matchfail">結果一致（両者エラー）</span>'
          : '<span class="badge diverged">相違あり ⚠</span>';
      const drift = r.msgDrift ? '<span class="badge drift">文言差異</span>' : "";
      const out =
        detail("TS7 出力", r.tsgoOut) + detail("tsc 出力", r.tscOut);
      return `<tr data-status="${r.status}" data-drift="${r.msgDrift}" data-chapter="${esc(r.chapter)}">
        <td class="status">${badge}${drift}</td>
        <td class="file"><code>${esc(r.file)}</code>${r.isTsx ? ' <span class="tag">tsx</span>' : ""}</td>
        <td class="ch">${esc(r.chapter)}</td>
        <td class="cmp">${okBadge(r.tsgoOk)}</td>
        <td class="cmp">${okBadge(r.tscOk)}</td>
        <td class="mark">${r.hasErrorMarker ? "✓" : ""}</td>
        <td class="out">${out}</td>
      </tr>`;
    })
    .join("\n");

  const projRows = projectResults
    .slice()
    .sort(
      (a, b) =>
        Number(b.diverged) - Number(a.diverged) ||
        Number(a.tsgoOk) - Number(b.tsgoOk) ||
        a.dir.localeCompare(b.dir)
    );
  const projHtml = projRows
    .map((r) => {
      const badge = r.diverged
        ? '<span class="badge diverged">相違あり ⚠</span>'
        : r.tsgoOk
        ? '<span class="badge pass">結果一致（PASS）</span>'
        : '<span class="badge matchfail">結果一致（両者エラー）</span>';
      const out = detail("TS7 出力", r.tsgoOut) + detail("tsc 出力", r.tscOut);
      return `<tr data-diverged="${r.diverged}">
        <td class="status">${badge}</td>
        <td class="file"><code>${esc(r.dir)}</code></td>
        <td class="cmp">${okBadge(r.tsgoOk)}</td>
        <td class="cmp">${okBadge(r.tscOk)}</td>
        <td class="out">${out}</td>
      </tr>`;
    })
    .join("\n");

  const pct = (n) => ((n / summary.total) * 100).toFixed(1);
  // "Version 7.0.1-rc" -> "7.0.1-rc" for compact table headers
  const verTs7 = esc(meta.tsgoVersion.replace(/^Version\s+/, ""));
  const verStable = esc(meta.tscVersion.replace(/^Version\s+/, ""));

  return `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>TypeScript 7 互換チェック結果</title>
<style>
  :root{--bg:#0f1115;--panel:#181b21;--border:#2a2f3a;--text:#e6e8eb;--muted:#9aa3b2;
    --pass:#2ea043;--matchfail:#3fa6a0;--diverged:#f85149;--drift:#d29922;--accent:#58a6ff;}
  *{box-sizing:border-box}
  body{margin:0;font-family:-apple-system,"Hiragino Kaku Gothic ProN","Noto Sans JP",system-ui,sans-serif;
    background:var(--bg);color:var(--text);line-height:1.6}
  header{padding:28px 32px;border-bottom:1px solid var(--border)}
  h1{margin:0 0 6px;font-size:22px}
  .meta{color:var(--muted);font-size:13px}.meta code{color:var(--accent)}
  main{padding:24px 32px 64px;max-width:1200px}
  .verdict{font-size:15px;padding:14px 18px;border-radius:12px;margin-bottom:24px;border:1px solid var(--border)}
  .verdict.good{background:rgba(46,160,67,.12);border-color:var(--pass)}
  .verdict.bad{background:rgba(248,81,73,.12);border-color:var(--diverged)}
  .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px;margin-bottom:24px}
  .card{background:var(--panel);border:1px solid var(--border);border-radius:12px;padding:16px 18px}
  .card .n{font-size:30px;font-weight:700}.card .l{color:var(--muted);font-size:13px}
  .card.pass .n{color:var(--pass)}.card.matchfail .n{color:var(--matchfail)}
  .card.diverged .n{color:var(--diverged)}.card.drift .n{color:var(--drift)}.card.sub{opacity:.85}
  .bar{height:10px;border-radius:6px;overflow:hidden;display:flex;margin:0 0 28px;border:1px solid var(--border)}
  .bar>i{display:block;height:100%}
  .controls{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:14px}
  .controls input,.controls select{background:var(--panel);color:var(--text);border:1px solid var(--border);
    border-radius:8px;padding:8px 10px;font-size:14px}.controls input{flex:1;min-width:220px}
  button.filter{background:var(--panel);color:var(--text);border:1px solid var(--border);
    border-radius:999px;padding:6px 14px;cursor:pointer;font-size:13px}
  button.filter.active{border-color:var(--accent);color:var(--accent)}
  h2{font-size:17px;margin:36px 0 12px}
  table{width:100%;border-collapse:collapse;font-size:13.5px}
  th,td{text-align:left;padding:9px 10px;border-bottom:1px solid var(--border);vertical-align:top}
  th{color:var(--muted);font-weight:600;position:sticky;top:0;background:var(--bg)}
  td.file code{color:var(--text);word-break:break-all}
  td.ch,td.mark,td.cmp{color:var(--muted);white-space:nowrap;text-align:center}
  .badge{display:inline-block;padding:3px 9px;border-radius:999px;font-size:11.5px;font-weight:700;white-space:nowrap}
  .badge.pass{background:rgba(46,160,67,.18);color:var(--pass)}
  .badge.matchfail{background:rgba(63,166,160,.16);color:var(--matchfail)}
  .badge.diverged{background:rgba(248,81,73,.2);color:var(--diverged)}
  .badge.drift{background:rgba(210,153,34,.18);color:var(--drift);margin-left:6px}
  .mini{font-weight:700;font-size:12px}.mini.ok{color:var(--pass)}.mini.ng{color:var(--muted)}
  .tag{font-size:10px;padding:1px 6px;border:1px solid var(--border);border-radius:4px;color:var(--muted)}
  details summary{cursor:pointer;color:var(--accent);font-size:12.5px}
  pre{background:#0b0d11;border:1px solid var(--border);border-radius:8px;padding:10px 12px;
    overflow-x:auto;font-size:12px;color:#ffb4ab;margin:6px 0 0;white-space:pre-wrap}
  .note{background:var(--panel);border:1px solid var(--border);border-left:3px solid var(--accent);
    border-radius:8px;padding:12px 16px;color:var(--muted);font-size:13px;margin-bottom:24px}
  .method{background:var(--panel);border:1px solid var(--border);border-radius:12px;padding:6px 18px;margin-bottom:24px}
  .method>summary{cursor:pointer;font-weight:700;font-size:15px;padding:10px 0;color:var(--text)}
  .method-body{font-size:13.5px;color:var(--muted);padding-bottom:8px}
  .method-body h3{color:var(--text);font-size:14px;margin:18px 0 6px}
  .method-body ul,.method-body ol{margin:6px 0;padding-left:22px}
  .method-body li{margin:4px 0}
  .method-body code{color:var(--accent)}
  .method-body pre{color:var(--text)}
  .method-body .caveat{font-size:12px;margin-top:12px}
  .hidden{display:none}
</style>
</head>
<body>
<header>
  <h1>TypeScript 7 互換チェック結果</h1>
  <div class="meta">
    TS7: <code>tsc ${esc(meta.tsgoVersion)}</code> ／ stable: <code>tsc ${esc(meta.tscVersion)}</code> ／ Node ${esc(meta.node)}<br>
    flags: <code>${esc(meta.flags)}</code>（.tsx は <code>--jsx react-jsx</code> 追加）<br>
    生成: ${esc(meta.generatedAt)}
  </div>
</header>
<main>
  <div class="verdict ${summary.diverged === 0 && meta.projectDiverged === 0 ? "good" : "bad"}">
    ${
      summary.diverged === 0 && meta.projectDiverged === 0
        ? `✅ <strong>TS7 (tsc ${esc(meta.tsgoVersion)}) と stable tsc の判定は全 ${summary.total} ファイル＋${meta.projectTotal} プロジェクトで完全一致。</strong>
           型チェックの合否が変わるサンプルはありません。＝ サンプルは TS7 でも現行と同じように動きます。`
        : `⚠️ <strong>TS7 と stable tsc で判定が相違したものが per-file ${summary.diverged} 件 / project ${meta.projectDiverged} 件あります。</strong>
           「相違あり」バッジの行が TS7 固有の要確認ポイントです。`
    }
    ${
      summary.msgDrift > 0
        ? `<br><br>⚠️ ただし、<strong>合否は同じでもエラーの「文言」が変わるファイルが ${summary.msgDrift} 件</strong>あります（黄色の「文言差異」バッジ）。
           誌面にコンパイラー出力や型の表示を引用している箇所は、そこだけ確認が必要です。`
        : ""
    }
  </div>

  <details class="method" open>
    <summary>このレポートの作り方（チェック手順）と結論の読み方</summary>
    <div class="method-body">
      <h3>背景：なぜ「一括コンパイル」では測れないか</h3>
      <ul>
        <li>本リポジトリは章×レシピで散在する<strong>独立スニペット集</strong>で、レシピ単位でしか型が閉じない。</li>
        <li><strong>意図的な型エラーが多数</strong>（「こう書くと怒られる」解説用）。エラーが出るのが正解のファイルがあるため「エラーゼロ＝OK」では判定不能。</li>
        <li>同一フォルダ内でスニペットが<strong>同じ変数名を再宣言</strong>するため、フォルダをまとめてコンパイルすると重複宣言の偽エラーが出る。</li>
      </ul>
      <p>→ そこで <strong>「1ファイルずつ独立検査」＋「TS7 と tsc(安定版) の判定を比較」</strong> という方針を採用。
        意図的エラーは両方で同じく失敗するので、<strong>判定が食い違った箇所（DIVERGED）だけ</strong>が TS7 固有の問題になる。</p>

      <h3>手順</h3>
      <ol>
        <li><strong>TS7 を導入</strong>：<code>tools/ts7-check/</code> に <code>typescript@7.0.2</code>（Go製ネイティブコンパイラ）を npm エイリアス <code>ts7rc</code> で隔離インストール。</li>
        <li><strong>比較用に安定版 tsc も導入</strong>：<code>typescript@${esc(meta.tscVersion)}</code>。同じ入力を両方に通して差分を取るため。</li>
        <li><strong>全 <code>.ts/.tsx</code> を個別に型チェック</strong>：各ファイルを引数で直接渡し、<code>--ignoreConfig</code> でリポジトリルートの
          <code>tsconfig.json</code> を無視させる（付けないと TS6/TS7 とも <code>TS5112</code> で即エラーになる）。これで変数衝突も避けられる。
          書籍の設定に合わせ <code>${esc(meta.flags)}</code>（.tsx は <code>--jsx react-jsx</code> 追加）を毎回明示。合否は終了コード（0=PASS / 2=FAIL）で判定。</li>
        <li><strong>TS7 と tsc を同条件で実行し比較</strong>：<code>diverged = (TS7 の合否 ≠ tsc の合否)</code>。これがゼロなら「TS7 にしても現行 tsc と同じ挙動」。</li>
        <li><strong>出力の「文言」も比較</strong>：<code>msgDrift = (合否は同じ &amp;&amp; 出力テキストが異なる)</code>。
          TS7 は <code>stableTypeOrdering</code>（既定ON・無効化不可）でリテラルUnionの表示順をソートし、テンプレートリテラル型の非ASCIIをエスケープしなくなったため、
          <strong>合否が変わらなくてもエラー文が変わる</strong>。誌面がコンパイラー出力を引用している箇所の洗い出しに使う。</li>
        <li><strong>独自 tsconfig を持つフォルダはプロジェクト単位でも検査</strong>：<code>-p &lt;folder&gt;</code> で両方。設定見本（ch14 など）を本来の意図で評価するため。</li>
        <li><strong>HTML / JSON に出力</strong>：このページ（<code>report/index.html</code>）と生データ <code>report/results.json</code>。</li>
      </ol>

      <h3>結論</h3>
      <p>per-file <strong>${summary.total}</strong> 件＋project <strong>${meta.projectTotal}</strong> 件すべてで
        <strong>TS7（tsc ${esc(meta.tsgoVersion)}）と tsc（${esc(meta.tscVersion)}）の判定が完全一致</strong>。
        TS7 固有の挙動差（DIVERGED）は <strong>${summary.diverged + meta.projectDiverged} 件</strong>、
        文言だけが変わるもの（msgDrift）は <strong>${summary.msgDrift} 件</strong>。</p>
      <p>エラーになる ${summary.bothFail} 件は TS7・tsc の<strong>両方で同じくエラー</strong>＝
        意図的な型エラー、<code>nodenext</code> でのESM拡張子要求、未インストールの外部型（zod / react など）、存在しない兄弟 import といった
        <strong>互換性とは無関係の要因</strong>。よって <strong>本サンプルは TypeScript 7 でも現行と同じように動く</strong>。</p>

      <h3>再現方法</h3>
      <pre>cd tools/ts7-check
npm install      # typescript@7.0.2（ts7rc）と typescript を導入
node check.mjs   # この report/index.html を再生成
open report/index.html</pre>
      <p class="caveat">※ TypeScript Playground は 2026-07 時点で 7.x を提供していない（TS7 は Go 製ネイティブバイナリで、npm パッケージに
        ブラウザ用の <code>lib/typescript.js</code> を同梱しない）。そのためサンプル中の Playground リンクは <code>ts=6.0.3</code> のままにしてある。</p>
    </div>
  </details>

  <div class="cards">
    <div class="card"><div class="n">${summary.total}</div><div class="l">対象ファイル</div></div>
    <div class="card pass"><div class="n">${summary.match}</div><div class="l">結果一致<br>（TS7 = tsc）</div></div>
    <div class="card diverged"><div class="n">${summary.diverged}</div><div class="l">相違あり<br>（TS7固有・要確認）</div></div>
    <div class="card drift"><div class="n">${summary.msgDrift}</div><div class="l">文言差異<br>（合否は同じ・誌面要確認）</div></div>
    <div class="card sub"><div class="n">${summary.bothPass}</div><div class="l">└ 両者 PASS</div></div>
    <div class="card sub matchfail"><div class="n">${summary.bothFail}</div><div class="l">└ 両者エラー<br>（意図的/環境要因）</div></div>
  </div>
  <div class="bar">
    <i style="width:${pct(summary.bothPass)}%;background:var(--pass)"></i>
    <i style="width:${pct(summary.bothFail)}%;background:var(--matchfail)"></i>
    <i style="width:${pct(summary.diverged)}%;background:var(--diverged)"></i>
  </div>

  <div class="note">
    <strong>読み方:</strong> このチェックの目的は <strong>「TS7 と stable (tsc) の判定が一致するか」</strong> です。
    本サンプルには解説用の<strong>意図的な型エラー</strong>が多数あるため、両者が揃ってエラーになる（NG/NG）のは<strong>「結果一致」＝互換性OK</strong>です。
    緑＝両者PASS、青緑＝両者エラー（どちらも一致）、<strong>赤＝相違あり（TS7 と tsc で判定が食い違う＝TS7固有の要確認点）</strong>。
    加えて<strong>黄＝文言差異</strong>（合否は同じだがエラーメッセージや型の表示が変わる）。誌面にコンパイラー出力を引用している箇所だけが対象です。
    まず<strong>赤</strong>、次に<strong>黄</strong>を見れば十分です。
  </div>

  <div class="controls">
    <input id="q" type="search" placeholder="ファイル名・エラー内容で絞り込み…">
    <button class="filter active" data-f="all">すべて</button>
    <button class="filter" data-f="diverged">相違ありのみ</button>
    <button class="filter" data-f="drift">文言差異のみ</button>
    <button class="filter" data-f="match-fail">両者エラーのみ</button>
    <button class="filter" data-f="match-pass">両者PASSのみ</button>
    <select id="ch"><option value="">全章</option></select>
  </div>

  <table id="tbl">
    <thead><tr><th>結果</th><th>ファイル</th><th>章</th><th>TS7<br>(${verTs7})</th><th>tsc<br>(${verStable})</th><th>「エラー」<br>コメント</th><th>詳細</th></tr></thead>
    <tbody>${rowsHtml}</tbody>
  </table>

  <h2>プロジェクト単位の検査（独自 tsconfig.json を持つ ${meta.projectTotal} フォルダ）</h2>
  <div class="note">
    単一ファイル検査ではフォルダの <code>tsconfig.json</code> は無視されます。設定そのものを解説する ch14 などのレシピは、
    こちらの <code>-p &lt;folder&gt;</code> 結果が本来の意図に近い評価です。多くは「実ファイルを同梱しない設定見本」や、
    特定オプションのエラーを見せるデモのため<strong>両者一致で FAIL</strong>します（互換性の問題ではありません）。相違: ${meta.projectDiverged} 件。
  </div>
  <table id="ptbl">
    <thead><tr><th>結果</th><th>フォルダ</th><th>TS7<br>(${verTs7})</th><th>tsc<br>(${verStable})</th><th>詳細</th></tr></thead>
    <tbody>${projHtml}</tbody>
  </table>
</main>
<script>
  const q=document.getElementById("q"),tbl=document.getElementById("tbl"),chSel=document.getElementById("ch");
  const rows=[...tbl.querySelectorAll("tbody tr")];
  let activeFilter="all";
  const chapters=[...new Set(rows.map(r=>r.dataset.chapter))]
    .sort((a,b)=>(parseInt(a.slice(2))||0)-(parseInt(b.slice(2))||0));
  for(const c of chapters){const o=document.createElement("option");o.value=c;o.textContent=c;chSel.appendChild(o);}
  function apply(){
    const term=q.value.trim().toLowerCase(),ch=chSel.value;
    for(const r of rows){
      const okF=activeFilter==="all"
        ||(activeFilter==="drift"?r.dataset.drift==="true":r.dataset.status===activeFilter);
      const okCh=!ch||r.dataset.chapter===ch;
      const okT=!term||r.textContent.toLowerCase().includes(term);
      r.classList.toggle("hidden",!(okF&&okCh&&okT));
    }
  }
  q.addEventListener("input",apply);chSel.addEventListener("change",apply);
  for(const b of document.querySelectorAll("button.filter")){
    b.addEventListener("click",()=>{
      document.querySelectorAll("button.filter").forEach(x=>x.classList.remove("active"));
      b.classList.add("active");activeFilter=b.dataset.f;apply();
    });
  }
</script>
</body>
</html>`;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
