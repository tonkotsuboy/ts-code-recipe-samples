class IdGenerator {
  static prefix: string;
  static #seed: number;

  static {
    this.prefix = "GEN";
    this.#seed = Date.now();
  }

  static next(): string {
    return `${this.prefix}-${this.#seed++}`;
  }
}

console.log(IdGenerator.next()); // 例：GEN-1700000000000
console.log(IdGenerator.next()); // 例：GEN-1700000000001
