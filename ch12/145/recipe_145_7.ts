// 書籍では recipe_145_6.ts で定義した Animal / Dog クラスを前提に呼び出しのみを示していますが、
// 単体で動くように同じクラス定義を同梱しています。
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log(`こんにちは、${this.name}です`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  greet(): void {
    super.greet();
    console.log("ワンワン！");
  }
}

const dog = new Dog("ポチ");
dog.greet();
// こんにちは、ポチです
// ワンワン！
