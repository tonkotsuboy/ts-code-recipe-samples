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

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/IYIwzgLgTsDGEAJYBthjAgygC2ABwFMEBvAKAQVEhniWGVgFdUICBBKA4ACgEoAuBADtGAWxAEoAblIBfUqQD0iug2bBWHLgkCHDIF6GQMMMgSYZASQyB87UCjEYHUGQGYMgEQZAVgx3A+gyBAhkAVDIEuGQD8MpFGgwAJQJ4YCEAc2QiAgAPViEAEwwcfCIyClgAeyFqRnhMqG5yCgQ8RhBkAEtYBAB3SoSIbEERcUkAGmKKMorqhGwCSvDsCBaxCShOil4SLoQwRkJC3hkKeXlSIQJahGDQiKjuAEYABnaEAFYVoA
