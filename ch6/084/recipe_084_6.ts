// 書籍ではこのスニペットのみだが、単体実行のため greet 関数の定義を同梱している
function greet(name: string = "ゲスト") {
  console.log(`こんにちは、${name}さん`);
}

greet(123); // コンパイルエラー
