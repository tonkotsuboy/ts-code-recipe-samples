// 単体ファイルの構文例です。実行時は ./utils が解決できる環境が必要です。
async function useSpecificFunction() {
  // 特定の関数のみを取得
  const { formatMessage } = await import("./utils");
  console.log(formatMessage("必要な関数のみ読み込み"));
}

useSpecificFunction();
