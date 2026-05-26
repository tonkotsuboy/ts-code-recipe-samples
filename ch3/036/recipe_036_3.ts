type MyType<T, U> = {
  a: T;
  b: U;
};

const obj: MyType<boolean, string> = {
  a: true,
  b: 42, // エラー
};
