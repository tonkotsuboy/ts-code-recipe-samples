// 書籍の通り、Temporal Dead Zoneで変数を定義前に参照するエラー例
// 実行すると ReferenceError になる
console.log(num); // エラー
const num = 10;
