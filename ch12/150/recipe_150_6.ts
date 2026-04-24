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
