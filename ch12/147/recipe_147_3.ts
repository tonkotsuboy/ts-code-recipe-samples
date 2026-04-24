// 意図的な型エラーデモです。抽象メソッドを実装していない派生クラスは
// コンパイルエラー（TS2515）になります。
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

// 動作確認用の new 呼び出し（書籍にはありません。エラーは型チェック段階で検出されます）
new Rectangle(10, 5);
