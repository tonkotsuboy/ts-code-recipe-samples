// 意図的な型エラーデモ（TS2322）。MyType<boolean, string>の2番目プロパティにnumberは入らない
// 書籍では直前のrecipe_036_1で宣言したMyTypeを流用していますが、単体で動くよう再掲しています
type MyType<T, U> = {
  a: T;
  b: U;
};

const obj: MyType<boolean, string> = {
  a: true,
  b: 42, // エラー
};
