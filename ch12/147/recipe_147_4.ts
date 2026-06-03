abstract class Shape {
  constructor(public name: string) {}

  abstract calculateArea(): number;

  describe(): void {
    console.log(`これは${this.name}です。`);
  }
}

class Triangle extends Shape {
  constructor(
    public base: number,
    public height: number,
  ) {
    super("三角形");
  }

  calculateArea(): number {
    return (this.base * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super("円");
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const triangle = new Triangle(10, 5);
triangle.describe();
console.log(triangle.calculateArea());
// これは三角形です。
// 25

const circle = new Circle(3);
circle.describe();
console.log(circle.calculateArea());
// これは円です。
// 28.274333882308138

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/IYIwzgLgTsDGEAJYBthjAgygC2ABwFMEBvAKASQHsA7SKAV3kqgAo96RkBLWBa4ALYEAXAjpdqAcwCUJAL6lyCUHTiJYwZLHqoIBAIJQCwFtNHV6AkASgBuRRQAmBMLChdrp0QDdKXRyRKFLA0YJTIBAB0yJSSLAAGgMoMgDEMgPYMACTEENhcYJH8QnKA5gyAmgyAQAzx0vYUCgqkKGgYACruwFIRCAQAHnrUjhg4+ERkwaHQjBDMLEEI7Jw8CCBoInyW1lAANDNz3LzYBFyS2BDmazZbFLIjFGL0hKwARICQcoBLkYBG+g9VSnXBmtq6BiMJjMqysNkCNwQRgg9Cg1AQLGyuUiSzARAAVAgkXl9odjrIAPQIABM1QQtUUDXQCAAwlwoCgiN1ev0sLhCBCqLRxkxWDsFjBHFx6GBTmCoFcZmA7jYWA9AGGKnzJPyQfx0wD0hmMXlB605FGhsPhAFkNdhIgAFACSCEx2MiguFGHRmNJ31IdRC3KxrXaRAAvHwCAB3BAtLhtSQRFgARgADBsEABWL7QCN+yLOVzuTxfL1hCLRWKI31RqIaLTqzVA0xfAlElKpV5vUplUj1klJyljJD0xkIQPUEO0vvRgDMedHUSzbg8BFM9nz4SiMTisCnkQr-w1gO10jrDbS8tb7aJxIAHJFiQB2AAsY4f5-PxLHcfPMbH56AA
