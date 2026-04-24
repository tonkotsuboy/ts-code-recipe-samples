type MyType<T extends "a" | "b" | "c"> = {
  foo: T;
};

// OK
const a: MyType<"a"> = {
  foo: "a",
};

// OK
const b: MyType<"b"> = {
  foo: "b",
};

// OK
const aOrC: MyType<"a" | "c"> = {
  foo: "c",
};
