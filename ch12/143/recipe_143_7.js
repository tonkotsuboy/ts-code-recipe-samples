class Animal {
  constructor(name) {
    this.name = name;
  }
}

const cat = new Animal("ネコ");
const dog = new Animal("イヌ");

console.log(cat.name); // 出力: ネコ
console.log(dog.name); // 出力: イヌ
