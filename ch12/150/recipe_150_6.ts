class Counter {
  static #count = 0; // プライベート静的フィールド

  static #increment(): void {
    // プライベート静的メソッド
    this.#count++;
  }

  static getCount(): number {
    this.#increment();
    return this.#count;
  }
}

console.log(Counter.getCount()); // 1
console.log(Counter.getCount()); // 2

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAEDCD2BXAdgFwKYCdoG8BQ00EqYqAlsNAMTBJrQC80ADANzQD0H0g6wyCXDIBKGQJsMgH4ZAEwyBNdMAhboFWGQMUMIwNcMgSYY8BIiXKUqZZMEzoAtujQAKAJQAuaADd4ZACa51hLr0GjJUwIcMgXoZAwwyqhISoABZkEAB0NHSoANRxrOoAvmqExKQU0ADm6KgIKKgW1siIhgBGWM7B0GER0br6RiZF5kk1BqiImMi14VExhe3Qqal4tMgQ8CDokSDw2aYFaFiRufmxFm2c3ACM4-CT07Pzi8sYmGt551vsbgBMQA
