async function main() {
  const controller = new AbortController();
  setTimeout(() => {
    controller.abort("timeout");
  }, 3000);

  try {
    await fetch("/api/report", { signal: controller.signal });
  } catch (error) {
    if (controller.signal.aborted) {
      console.error("中断理由:", controller.signal.reason); // "timeout"
    }
  }
}

main();

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/IYZwngdgxgBAZgV2gFwJYHsIwLbFRACgEoYBvAKBhikxGWs2QCd0AbVgUyZgF4YIOAdxgBBAEbomyAMKMW7LsQDclGCA7IAKqmwd0CZAWK8AfGVVUaEZm05MAdMAlSCAIjS79yV0RVUAvgA0MADMAAwRvuSqzGDmVFTAgnj0cBpQABZuAPTAAA6o2UwceZLewaRqqADmEMCsAFwM1vJ29iA1daww-lEB1MDImTAEXCxMJBQJMKhwI1Y2Cg4dtfWOzsgcACaTFglWIGwc9mOSboC0coC1poBgLoCMrg2uwQutXO2da8WgmL4w2dkw7h0egMrj2-lU4PB5Fw+GUQA
