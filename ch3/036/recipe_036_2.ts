type MyType<T, U> = {
  a: T;
  b: U;
};

const obj1: MyType<string, number> = {
  a: "Hello",
  b: 42,
};

const obj2: MyType<boolean, string[]> = {
  a: true,
  b: ["foo", "bar"],
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAsiAq4IB54BooFUB8UC8UA3gFBRQCGAXFPANylQBG1m9AvvcQMYD2AdgGdgUHowBWARmpxEkZEIBOASz4BzDHwCuAW0YQFuAiTJUoAIgASEADbWeZtA2ZQALACZHHYt35CR4t2kEJGRGHh5rCHI+DEUVVQBtAF1DIgZTYAVNCEcyZwSzADNwh3NGcgUzJM9aIA
