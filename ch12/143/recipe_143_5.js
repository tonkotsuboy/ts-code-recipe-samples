// プロパティの書き換えを示すサンプルです。単体で動くよう Animal クラスの定義を同梱しています。
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
