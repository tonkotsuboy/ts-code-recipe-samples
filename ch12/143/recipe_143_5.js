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

// プロパティの値を変更
dog.name = "シロ";
dog.age = 4;

console.log(dog.name); // 出力: シロ
console.log(dog.age); // 出力: 4

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYGwhgzhAECCB2BLAtmE0DeAoa15mQFMBuHaMAcxLOAHt4IAXAJwFdhHbmAKfIgGnJUAlJjK5GAC0QQAdH0LQAvHgLVcE6XMqKVO0rgC+WY1joNG0ACa0KyvIQDucJKhDcARIF2GQIMMHwQDMwqTmELQghLIgttw2FPJqwdAA9MnQgF+KgNlKAFzQvlhYqdCA6wyAtwyAiwyAYwyAxQyAdgyAJAqASQyAkJqAL2ZYcQlE9h6A7QylHqSdOvYALKRm9GERUTGdCklFWbn9kwzhkdEUsbayOotpy9CjQA
