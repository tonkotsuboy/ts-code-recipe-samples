type MyType<T> = {
  foo: T;
};

const e: MyType = {
  foo: "red",
};
// エラー
