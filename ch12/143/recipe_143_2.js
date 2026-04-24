// 書籍では recipe_143_1.js で定義した Animal クラスを前提にインスタンス化のみを示していますが、
// 単体で動くように同じクラス定義を同梱しています。
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
