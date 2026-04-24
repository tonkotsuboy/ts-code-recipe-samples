type MyType<T extends { a: string }> = {
  foo: T;
};

const myObj: MyType<{ a: string }> = {
  foo: { a: "a" },
};
