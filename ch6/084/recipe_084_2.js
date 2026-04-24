// 書籍ではこのスニペットのみだが、単体実行のため greet 関数の定義を同梱している
function greet(name = "ゲスト") {
  console.log(`こんにちは、${name}さん`);
}

greet(); // 出力: こんにちは、ゲストさん
