// 単体ファイルの構文例です。実行時は ./data.json が解決できる環境が必要です。
async function loadJson() {
  const { default: data } = await import("./data.json", {
    with: { type: "json" },
  });
  console.log(data);
}

loadJson();
