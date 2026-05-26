const person = {
  name: "太郎",
  greet() {
    console.log(`こんにちは、${this.name}さん`);
  },
};

person.greet(); // 出力: こんにちは、太郎さん
