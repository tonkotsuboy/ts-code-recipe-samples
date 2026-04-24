function checkPositive(number: number) {
  if (number < 0) {
    throw new Error("数値は0以上である必要があります");
  }
  console.log("数値は正です");
}

try {
  checkPositive(-3);
} catch (error) {
  if (error instanceof Error) {
    console.error(`エラーが発生しました: ${error.message}`);
  }
}
console.log("後続の処理です");
// 出力結果: エラーが発生しました: 数値は0以上である必要があります
// 後続の処理です
