interface Animal {
  name: string;
  walk(): void;
}

class MyAnimal2 implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  // walkメソッドがないためエラー
}
