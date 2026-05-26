class Parent {
  message: string = "親クラス";

  greet(): void {
    console.log("こんにちは");
  }
}

class Child extends Parent {
  // 派生クラス独自のプロパティ
  age: number = 10;

  // 派生クラス独自のメソッド
  play(): void {
    console.log("遊んでいます");
  }
}

const child = new Child();
console.log(child.message); // 親クラス
child.greet(); // こんにちは
console.log(child.age); // 10
child.play(); // 遊んでいます
