class Animal {
  name: string; // プロパティの型を指定
  age: number; // number型を指定

  constructor(name: string, age: number) {
    // 引数の型を指定
    this.name = name;
    this.age = age;
  }

  makeSound(): void {
    // 戻り値の型を指定（voidは何も返さない）
    console.log("動物の鳴き声");
  }
}

const dog = new Animal("ポチ", 3);
console.log(dog.name); // 出力: ポチ
console.log(dog.age); // 出力: 3
dog.makeSound(); // 出力: 動物の鳴き声
