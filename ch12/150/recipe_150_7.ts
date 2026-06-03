class Temperature {
  #celsius = 0; // プライベートフィールド

  // プライベートゲッター
  get #fahrenheit(): number {
    return (this.#celsius * 9) / 5 + 32;
  }

  // プライベートセッター
  set #fahrenheit(value: number) {
    this.#celsius = ((value - 32) * 5) / 9;
  }

  setTemperature(celsius: number): void {
    this.#celsius = celsius;
  }

  getTemperatureInfo(): string {
    return `摂氏${this.#celsius}度は華氏${this.#fahrenheit}度です`;
  }
}

const temp = new Temperature();
temp.setTemperature(25);
console.log(temp.getTemperatureInfo()); // 摂氏25度は華氏77度です

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAEAqCmBbADvATmALgVzfaA3gFDTQDEw8IEAltjALzQAMA3NAPQfSDrDIJcMgEoZAmwyAfhkATDIFWGQMUMIwNcMgSYYiJTt37DxgJoZAwwyB+hhHKA5vEzkAZmAAWeAHYX4NTAAoAlAC5o17IgBG6QstI8HDRraEdMCxoIADoKKlp6aAAqaABOZ05oAFZoAGpoAGYAJlZlAF8lUi5eQVExQG6GXX1SCGMzSxs7B0cANzAQbHh3Tx90DOJSUgio2MpqOkYw3v7B6ABaQqKMlKyM7lTS0grlVswEFHQsXHhHOYSIYa9fNDdoHoB7GgATf0noaZicXmiSYdwWh2gx1IRjOSFQGGC8AAktZTO8XO4IJg0DRrAZfpMgrhQgADQBCJoB4GwAJAQAbN4gsyoAyvUA9gyAe+DqbTIoDzFZ4LZ7JhmYBzBkAmgwkiEVY7Ad7WLH-OHQJjWeAAdzgcMuiJcpUwcOip3O8KueEcRV2pRlcveIHg0RA7wM4X1MKNWuuKLRLmc7GqlPNrI5AHYg0yxUA
