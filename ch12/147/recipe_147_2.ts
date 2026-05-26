abstract class Shape {
  abstract calculateArea(): number;
}

const shape = new Shape();
// エラー: Cannot create an instance of an abstract class.
console.log(shape);
