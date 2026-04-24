// 意図的な型エラーデモ（TS2322）。nameプロパティにnumberを代入するとエラー
const user: { name: string; age: number; isAdmin: boolean } = {
  name: 123,
  age: 30,
  isAdmin: false,
};
