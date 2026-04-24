class Logger {
  static #maxLines = 100; // プライベート静的フィールド

  // プライベート静的ゲッター
  static get #lineLimit(): number {
    return this.#maxLines;
  }

  // プライベート静的セッター
  static set #lineLimit(value: number) {
    this.#maxLines = value;
  }

  static setMaxLines(lines: number): void {
    this.#lineLimit = lines;
  }

  static getMaxLines(): number {
    return this.#lineLimit;
  }
}

console.log(Logger.getMaxLines()); // 100
Logger.setMaxLines(200);
console.log(Logger.getMaxLines()); // 200
