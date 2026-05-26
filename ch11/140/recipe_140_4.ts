function checkPositive(number: number) {
  if (number < 0) {
    throw new Error("数値は0以上である必要があります");
  }
  console.log("数値は正です");
}

try {
  checkPositive(5);
  console.log("処理が正常に完了しました");
} catch (error) {
  console.error("エラーが発生しました", error);
} finally {
  console.log("クリーンアップ処理を実行します");
}
console.log("後続の処理です");
// 数値は正です → 処理が正常に完了しました → クリーンアップ処理を実行します → 後続の処理です
