class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  calculate(): void {
    const sum = this.add(5, 3);
    const difference = this.subtract(5, 3);
    console.log(`合計: ${sum}, 差: ${difference}`);
  }
}

const calculator = new Calculator();
calculator.calculate(); // 出力: 合計: 8, 差: 2
