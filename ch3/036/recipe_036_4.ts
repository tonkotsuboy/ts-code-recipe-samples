type MyType<T, U, V> = {
  a: T;
  b: U;
  c: V;
};

const obj: MyType<string, number, boolean> = {
  a: "Hello",
  b: 42,
  c: true,
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAsiAq4IB54BooFUMDUB8UAvFAN4BQUUAhgFxTwDcFUARnZk5QMZ05MC+TMlwD2AOwDOwKCJYArOnESRkUgE4BLMQHMMYgK4BbFhDUYWIkQBsIVMQWLlKtKACIAEhCtWRrtMzYoABYAJn9uOmA1fQh-QSA
