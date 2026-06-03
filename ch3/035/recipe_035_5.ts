type MyType<T> = {
  foo: T;
};

const d: MyType<"red" | "blue"> = {
  foo: "red",
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAsiAq4IB54D4oF4oG8BQUUAZgPYkBcU8A3HgL614DGJAdgM7BQAmlcikZACIAThG5CoAHyhCARgBsArhCEZs+QqQqyxEgDT1qQA
