const person = {
  name: "太郎",
  greet() {
    setTimeout(() => {
      console.log(`こんにちは、${this.name}さん`);
      // thisはpersonオブジェクトを参照する
    }, 1000);
  },
};

person.greet(); // 出力: こんにちは、太郎さん
