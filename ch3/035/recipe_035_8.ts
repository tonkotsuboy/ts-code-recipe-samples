type MyObject<T> = { foo: T };
const obj: MyObject<string> = { foo: "hello" };
const obj2: MyObject<number> = { foo: 123 };
