abstract class Shape {
  abstract calculateArea(): number; // 抽象メソッド

  describe(): void {
    console.log("これは図形です。");
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
circle.describe();
console.log(circle.calculateArea());
// これは図形です。
// 78.53981633974483
