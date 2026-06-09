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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAEAyD2BzRBTATtA3gKGtCALmAQJbDQDEAtmAB6wkB2KMAvNAIwAMXA3NAHoB0QOsMgS4ZAJQyBNhkA-DIAmGQJrpgELdAqwyBihhmBrhkCTDNlyDh46fOWAmhkDDDIH6GGfsLEy0VAUogmKBlRIEAFAEoAXNCMAK5UAEboWPp4aCgEwWiM0AQAFiQQAHTUdAzMELz6AL56eEKikrKKSoDdDFY2eHak5BBxLm4eXt4AbmAgwSiBIeHovlF4eKnpWTT0bmzQPX0oBXjFtkRN+HEAsjlz3q55g6ERaAEL8CQAJmPjk5kUh+4kns7sT-lFJfgbDk67szyfmOwwwOHG0Fi8USyTSDyeHQIK2gxTWwHgjAg8BAKAyICQ3gQyHQGX+eyBvl8-DK3C42CJqDQGRaBABuRY3gATDwqdh0Zjsbj8YhCUhGaSduSOZTqcJuVwgA
