type MyType<T> = {
  foo: T;
};

const a: MyType<string> = {
  foo: "HELLO",
};

const b: MyType<number> = {
  foo: 120,
};
