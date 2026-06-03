type MyType<T> = {
  foo: T;
};

const e: MyType = {
  foo: "red",
};
// エラー

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAsiAq4IB54D4oF4oG8BQUUAZgPYkBcU8A3HgL614DGJAdgM7BQSVyKRZcBYmUoAiAE4QAJmIA09WgHolUQBUMgS4ZAPwxA
