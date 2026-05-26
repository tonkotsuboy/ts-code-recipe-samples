type MyType<T> = {
  foo: T;
};

const a: MyType<string> = {
  foo: "HELLO",
};
