type MyType<T> = {
  foo: T;
};

const c: MyType<number> = {
  foo: 200,
};
