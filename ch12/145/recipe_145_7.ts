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
