function greet(name: string = "ゲスト") {
  console.log(`こんにちは、${name}さん`);
}

// 書籍では関数定義のみだが、動作確認のため呼び出し例を追加している
greet(); // こんにちは、ゲストさん
greet("太郎"); // こんにちは、太郎さん
