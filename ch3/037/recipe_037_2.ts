// 書籍では直前のrecipe_037_1で宣言したMyTypeを流用していますが、単体で動くよう再掲しています
type MyType<T = string> = T;

const a: MyType = "Hello";
