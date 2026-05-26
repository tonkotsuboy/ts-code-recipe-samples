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
