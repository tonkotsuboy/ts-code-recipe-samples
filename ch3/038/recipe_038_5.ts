type MyType<T extends { a: string }> = {
  foo: T;
};

const myObj2: MyType<{ a: string; b: number }> = {
  foo: { a: "a", b: 2 },
};
