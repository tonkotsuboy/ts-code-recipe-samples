function greet(name = "ゲスト", age: number) {
  console.log(`こんにちは、${name}さん（${age}歳）`);
}

// 書籍では関数定義のみだが、動作確認のため呼び出し例を追加している
greet(undefined, 25); // こんにちは、ゲストさん（25歳）
