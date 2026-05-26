class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class BadStudent extends Person {
  constructor(name: string) {
    this.name = name; // コンパイルエラー
    super(name);
  }
}

// 実行すると ReferenceError: Must call super constructor in derived class ... になります。
new BadStudent("山田");
