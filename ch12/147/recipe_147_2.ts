abstract class Shape {
  abstract calculateArea(): number;
}

const shape = new Shape();
// エラー: Cannot create an instance of an abstract class.
console.log(shape);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/IYIwzgLgTsDGEAJYBthjAgygC2ABwFMEBvAKAQVEhniWGVgFdUICBBKA4ACgEoAuBADtGAWxAEoAblIBfUqVgB7IZARhchBAF5hBAO5ZNBPjID0ZhIAqGQJcMgH4ZBAYWBChSxLE7BWlIQgCWqhAusERKAGa+lODQcB6o6AB0iipgSsgEichKAObcGvgEvFJAA
