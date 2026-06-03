class Animal {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const dog = new Animal("ポチ", 3);
console.log(dog.name); // 出力: ポチ
console.log(dog.age); // 出力: 3

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYGwhgzhAECCB2BLAtmE0DeAoa15mQFMBuHaMAcxLOAHt4IAXAJwFdhHbmAKfIgGnJUAlJjK5GAC0QQAdH0LQAvHgLVcE6XMqKVO0rgC+WY1joNG0ACa0KyvIQDucJKhDcARIF2GQIMMHwQDMwqTmELQghLIgttw2FPJqwdAA9MnQgF+KgNlKAFzQvmb0YRFRMXGyOkmpGTnQAUA
