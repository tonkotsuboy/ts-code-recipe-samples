function identity<T>(arg: T): T {
  return arg;
}

type GenericResult = ReturnType<typeof identity>; // unknown
type Result1 = ReturnType<typeof identity<number>>; // number
type Result2 = ReturnType<typeof identity<string>>; // string

const a: Result1 = 1;
const b: Result2 = "hello";
console.log(a, b);
