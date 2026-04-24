// 書籍では recipe_145_1.ts で定義した Parent / Child クラスを前提に呼び出しのみを示していますが、
// 単体で動くように同じクラス定義を同梱しています。
class Parent {
  message: string = "親クラス";

  greet(): void {
    console.log("こんにちは");
  }
}

class Child extends Parent {
  age: number = 10;

  play(): void {
    console.log("遊んでいます");
  }
}

const child = new Child();
// 親クラスから継承したプロパティとメソッド
console.log(child.message); // 親クラス
child.greet(); // こんにちは
// 派生クラス独自のプロパティとメソッド
console.log(child.age); // 10
child.play(); // 遊んでいます
