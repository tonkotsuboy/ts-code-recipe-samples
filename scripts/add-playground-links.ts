// .ts サンプルの末尾に TypeScript Playground の実行リンクを追記するスクリプト
//
// 使い方（リポジトリのルートで実行）:
//   node scripts/add-playground-links.ts <ファイルパス...>   # 指定ファイルにリンクを付与
//   node scripts/add-playground-links.ts --update            # リンク付与済みの全ファイルを再生成
//
// 例:
//   node scripts/add-playground-links.ts ch2/009/recipe_009_1.ts
//
// コードを修正したあとは --update を実行すれば、リンクが新しいコードに追従します。
// 何度実行しても結果が変わらない（冪等）設計です。
// マーカー行（MARKER_PREFIX）以降を取り除いたコードを圧縮してURLを作り、
// マーカー行とURLを付け直します。

import { globSync, readFileSync, writeFileSync } from "node:fs";
import lzString from "lz-string";

const { compressToEncodedURIComponent } = lzString;

// Playgroundで開くTypeScriptのバージョン（書籍の前提に合わせて固定）
const TS_VERSION = "6.0.3";

// マーカー行: この行以降はスクリプトが管理する（コード本体には含めない）
// console.log などの出力があるサンプルにはRunボタンの案内を付け、
// 型の確認が主目的のサンプル（実行しても何も出ないもの）には付けない
const MARKER_PREFIX = "// ブラウザ上で編集できます";
const MARKER_WITH_RUN = `${MARKER_PREFIX}。実行するには左上の「Run」ボタンを押してください`;
const MARKER_EDIT_ONLY = MARKER_PREFIX;

function buildPlaygroundUrl(code: string, filePath: string): string {
  const compressed = compressToEncodedURIComponent(code);
  // .js ファイルはPlaygroundのJSモードで開く。
  // checkJs=false を付けて型チェックを無効化し、JS本来の挙動（動的型付けなど）を
  // エディタ上のエラーなしで確認できるようにする
  const filetype = filePath.endsWith(".js") ? "&filetype=js&checkJs=false" : "";
  return `https://www.typescriptlang.org/play/?ts=${TS_VERSION}${filetype}#code/${compressed}`;
}

function addLink(filePath: string): void {
  const original = readFileSync(filePath, "utf8");

  // 既存のマーカー行以降を取り除き、コード本体だけにする
  const markerIndex = original.indexOf(MARKER_PREFIX);
  const code = (markerIndex === -1 ? original : original.slice(0, markerIndex)).trimEnd();

  // 実行して出力が出るサンプルにだけ、Runボタンの案内を付ける
  const marker = /console\./.test(code) ? MARKER_WITH_RUN : MARKER_EDIT_ONLY;

  const url = buildPlaygroundUrl(code, filePath);
  const updated = `${code}\n\n${marker}\n// ${url}\n`;

  writeFileSync(filePath, updated);
  console.log(`✅ ${filePath}（URL ${url.length}文字）`);
}

const args = process.argv.slice(2);

// --update: リンク付与済み（マーカーを含む）ファイルをすべて再生成する
const files = args.includes("--update")
  ? globSync("ch*/**/*.{ts,js}").filter((file) =>
      readFileSync(file, "utf8").includes(MARKER_PREFIX),
    )
  : args;

if (files.length === 0) {
  console.error("ファイルパスを指定してください。例: node scripts/add-playground-links.ts ch2/009/recipe_009_1.ts");
  process.exit(1);
}

for (const file of files) {
  addLink(file);
}
