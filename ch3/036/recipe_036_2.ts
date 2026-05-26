type MyType<T, U> = {
  a: T;
  b: U;
};

const obj1: MyType<string, number> = {
  a: "Hello",
  b: 42,
};

const obj2: MyType<boolean, string[]> = {
  a: true,
  b: ["foo", "bar"],
};
