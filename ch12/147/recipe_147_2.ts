// 意図的な型エラーデモです。抽象クラスを直接インスタンス化するとコンパイルエラー（TS2511）になります。
abstract class Shape {
  abstract calculateArea(): number;
}

const shape = new Shape();
// エラー: Cannot create an instance of an abstract class.
console.log(shape);
