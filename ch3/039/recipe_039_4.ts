type MyFunction<T> = (arg: T) => T;

const myStringFunc: MyFunction<string> = (arg) => {
  return arg.toUpperCase();
};

const myNumberFunc: MyFunction<number> = (arg) => {
  return arg * 2;
};
