// 書籍では直前のrecipe_035_1で宣言したMyTypeを流用していますが、単体で動くよう再掲しています
type MyType<T> = {
  foo: T;
};

const d: MyType<"red" | "blue"> = {
  foo: "red",
};
