class Animal {
  name; // nameプロパティを持つことを宣言
  age; // ageプロパティを持つことを宣言

  // コンストラクター
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const dog = new Animal("ポチ", 3);
console.log(dog.name); // 出力: ポチ
console.log(dog.age); // 出力: 3
