// 意図的な型エラーデモ（TS2314）。MyType<T>のTを指定しないとエラー
// 書籍では直前のrecipe_035_1で宣言したMyTypeを流用していますが、単体で動くよう再掲しています
type MyType<T> = {
  foo: T;
};

const e: MyType = {
  foo: "red",
};
// エラー
