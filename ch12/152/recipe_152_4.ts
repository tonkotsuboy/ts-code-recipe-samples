class Person {
  accessor name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p = new Person("鈴木");
console.log(p.name); // 出力: 鈴木
p.name = "田中";
console.log(p.name); // 出力: 田中

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAEAKCmAnCB7AdtA3gKGtMww8UKi0aYAtvAFzQQAuiAlmgOYDc2u0w6jiAK7AGpABQVqdAazYBKLDzwMAFswgA6SfGgBeclXhc8AX2xnsfNI2gAHPeXgB3OElRoxAIkAsSYApzT3JcVqgg8BogKGxitlqGgdAA9AnQgF+KgNlKdH7YMdoOnoAMroC0cp5B-Cih4ZHRsdTxSakZ0EVAA
