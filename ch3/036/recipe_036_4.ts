type MyType<T, U, V> = {
  a: T;
  b: U;
  c: V;
};

const obj: MyType<string, number, boolean> = {
  a: "Hello",
  b: 42,
  c: true,
};
