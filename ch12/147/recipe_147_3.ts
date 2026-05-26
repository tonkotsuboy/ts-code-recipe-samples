abstract class Shape {
  abstract calculateArea(): number;
}

// calculateArea メソッドを実装していないためエラー
class Rectangle extends Shape {
  constructor(
    public width: number,
    public height: number,
  ) {
    super();
  }
}

new Rectangle(10, 5);
