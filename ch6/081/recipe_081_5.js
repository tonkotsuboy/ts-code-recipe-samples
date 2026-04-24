const person = {
  name: "鈴木",
  greet() {
    console.log(`こんにちは、${this.name}さん`);
  },
};
person.greet(); // 出力：こんにちは、鈴木さん
