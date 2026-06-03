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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAEAKYCcCmA7ALtA3gKGtAtklGAOZIBc0EaCAliidALzQBEgVZGD1DIJcMgnQysBubLmglkSNAAoAlJQBuAe1oATLCLzAFKCApBIAdCAUlJrQMoMgZIZA1gyBDBkD2DK2lC8AX2xvsoSDADCAC1oQVSQADzRUZRh4ZHQ1PAB6eOhAPltAfFceXkAbp0ArwMA7BkB1hkBbhkBFhkAxhkBihhFSCmgUAFd8ACMkBGZoAEYABiERRJT0vhzcwEOGQF6GQGGGQEmGEQAHcABPGXklVRw8DS0dPUNjU0ApBItAcwZAEQZAPwZATQZHZ2g3D01tDGAAoLaUJAB3aH9A5Rkhe62BiMJieP30hGIZCc0D6XD4nmeyn0YiQEj+MKSllsdk8m10QN2oKC+mq0L6XQRYLmYEWZKSBxOFyAA
