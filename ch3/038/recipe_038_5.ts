// 書籍では直前のrecipe_038_4で宣言したMyTypeを流用していますが、単体で動くよう再掲しています
type MyType<T extends { a: string }> = {
  foo: T;
};

const myObj2: MyType<{ a: string; b: number }> = {
  foo: { a: "a", b: 2 },
};
