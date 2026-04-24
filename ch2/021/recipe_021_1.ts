const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
  if (number === 5) {
    console.log("5が見つかったのでループを終了します");
    break;
  }
  console.log(number);
}
// 実行結果: 1, 2, 3, 4, 5が見つかったのでループを終了します
