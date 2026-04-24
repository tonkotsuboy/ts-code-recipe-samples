function greet(user: { name: string }) {
  console.log(`こんにちは、${user.name}さん！`);
}

// 書籍では関数定義のみだが、動作確認のため呼び出し例を追加している
greet({ name: "田中" }); // こんにちは、田中さん！
