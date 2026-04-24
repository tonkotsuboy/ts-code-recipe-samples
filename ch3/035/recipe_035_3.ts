// 意図的な型エラーデモ（TS2322）。MyType<string>のfooにnumberを入れるとエラー
// 書籍では直前のrecipe_035_1で宣言したMyTypeを流用していますが、単体で動くよう再掲しています
type MyType<T> = {
  foo: T;
};

const b: MyType<string> = {
  foo: 120,
};
// エラー
