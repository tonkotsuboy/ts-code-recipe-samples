type MyType<T extends "a" | "b" | "c"> = {
  foo: T;
};

const c: MyType<"d"> = {
  foo: "d",
};
