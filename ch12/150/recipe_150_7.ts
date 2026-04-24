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
