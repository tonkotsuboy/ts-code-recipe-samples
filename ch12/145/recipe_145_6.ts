// クラス定義のみのサンプルのため、末尾に動作確認用の `new` 呼び出しを追加しています（書籍にはありません）。
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
    super.greet(); // 親クラスのメソッドを呼び出す
    console.log("ワンワン！");
  }
}

// 動作確認用（書籍では recipe_145_7.ts 側で呼び出しています）
const dog = new Dog("ポチ");
dog.greet();
// こんにちは、ポチです
// ワンワン！
