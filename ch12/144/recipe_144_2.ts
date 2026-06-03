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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAEDCYmAV3AFwPYCdoG8BQ00YAJsQBRgBc0AdkgLYBGAppgDTSPV1OsCU3Bi2z5ChTM1RJMNItADUnANwFoAXzyqISRqkxhgqCoN7tOJ4QNpDWuVeMnTZYaAFplqjauAJkaZmRWAG7oAJbEdmLQwOg0EKjQ2vTQALzQqAAWoRAAdCTkAKwcAMx8KlExcQnEoQBmtazMNMDMqelZudq6+oZkRdCl5WKVEOggzDkg6ADmZAAGgBAqgBBR1AAkOElqHIB3ums4NfWNzcxqc2WeeF4jCT6IKGAY2Gk0zADucL73j4Eqt34PWByfy+ATK0AA9ODoIAvxUA2UrUZbUAAcO2oACYgA
