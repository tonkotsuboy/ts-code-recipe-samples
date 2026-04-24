const person = {
  name: "太郎",
  greet() {
    setTimeout(function () {
      console.log(`こんにちは、${this.name}さん`);
      // thisはpersonを指さない
    }, 1000);
  },
};
person.greet();
// 1秒後に、「こんにちは、さん」と出力される
