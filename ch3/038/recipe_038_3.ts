// 意図的な型エラーデモ（TS2344）。"d"は"a"|"b"|"c"の制約に合致しない
// 書籍では直前のrecipe_038_2で宣言したMyTypeを流用していますが、単体で動くよう再掲しています
type MyType<T extends "a" | "b" | "c"> = {
  foo: T;
};

const c: MyType<"d"> = {
  foo: "d",
};
