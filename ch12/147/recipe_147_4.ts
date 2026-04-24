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
