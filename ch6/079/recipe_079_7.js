// 書籍の通り、関数式を定義前に呼び出すエラー例
// 実行すると ReferenceError になる
sayHi(); // エラー
const sayHi = function () {
  console.log("こんにちは");
};
