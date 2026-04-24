const person: {
  name: string;
  greet(name: string): void;
} = {
  name: "鈴木",
  greet(name) {
    console.log(`こんにちは、${name}さん`);
  },
};

// 書籍では定義のみだが、動作確認のため呼び出し例を追加している
person.greet("太郎"); // こんにちは、太郎さん
