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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAEAKYCcCmA7ALtA3gKGtAtklGAOZIBc0EaCAliidALzQBEgVZGD1DIJcMgnQysBubLmglkSNAAoAlJQBuAe1oATLCLzAFKCApBIAdCAUlJrQMoMgZIZA1gyBDBkD2DK2lC8AX2xvsoSDADCAC1oQVSQADzRUZRh4ZHQ1PFIKaBQAV3wAIyQEZmgARgAGIREAB3AATxl5JVUcPA0tHT1DY1NAKQSLQHMGQBEGQD8GQE0GR2doNw9NbQxgAKDslCQAd2h-QOUZIQB6VeguPkBpBkBIhkBM30B-I0B1BkB9BkB1hkBbhkBFhkAxhkBihkALBkBDhkBehkBhhkBJhk963QMjEwTJb6QjEMhOaDrTY8XieSbKfRiJASFaQjaWWx2bBQwB8toB8VxhgBunQBXgYA7Biudyeby+P20fyagPh+gSEKh+ThwJKYHKrI2bS6fSAA
