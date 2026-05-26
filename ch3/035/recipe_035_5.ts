type MyType<T> = {
  foo: T;
};

const d: MyType<"red" | "blue"> = {
  foo: "red",
};
