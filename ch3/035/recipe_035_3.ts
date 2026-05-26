type MyType<T> = {
  foo: T;
};

const b: MyType<string> = {
  foo: 120,
};
// エラー
