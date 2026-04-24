// 書籍では「空配列に対して初期値を省略すると TypeError になる」ことを示すサンプル。
// 実行するとランタイムエラーで停止するので、配布コードでは try/catch で囲んで
// 読者が最後まで出力を追えるようにしています。
const emptyArray = [];
// エラーが発生
try {
  const result1 = emptyArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );
  console.log(result1);
} catch (error) {
  console.log(error instanceof Error ? error.message : error);
  // TypeError: Reduce of empty array with no initial value
}
