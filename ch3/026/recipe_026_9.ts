// 意図的な型エラーデモ（TS2741）。必須のnameプロパティが欠けているとエラー
const user: { name: string; age: number; isAdmin: boolean } = {
  age: 30,
  isAdmin: false,
};
