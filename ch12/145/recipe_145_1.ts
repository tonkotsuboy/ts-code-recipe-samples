// クラス定義のみのサンプルのため、末尾に動作確認用の `new` 呼び出しを追加しています（書籍にはありません）。
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

// 動作確認用（書籍では recipe_145_2.ts 側で呼び出しています）
const child = new Child();
console.log(child.message); // 親クラス
child.greet(); // こんにちは
console.log(child.age); // 10
child.play(); // 遊んでいます
