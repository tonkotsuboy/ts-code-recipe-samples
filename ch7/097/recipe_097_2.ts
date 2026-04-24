// 意図的な型エラーデモ: Readonly<User>のプロパティへの再代入でエラー (期待エラー: TS2540)
type User = {
  name: string;
  age: number;
};
type ReadonlyUser = Readonly<User>;
const user: ReadonlyUser = {
  name: "田中",
  age: 24,
};
user.name = "鈴木"; // エラー
