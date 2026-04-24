// 書籍ではこのスニペットのみだが、単体実行のため greet 関数の定義を同梱している
// 型を省略した場合、name 引数の型は string と推論される
function greet(name = "ゲスト") {
  console.log(`こんにちは、${name}さん`);
}

greet(123); // コンパイルエラー
