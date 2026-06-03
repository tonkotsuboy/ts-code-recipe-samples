type MyType<T> = {
  foo: T;
};

const b: MyType<string> = {
  foo: 120,
};
// エラー

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAsiAq4IB54D4oF4oG8BQUUAZgPYkBcU8A3HgL614DGJAdgM7BQBGlcikZJwBOAS1YBzDNnyFSFKAEYATAAYANPVoB6bVEAVDIEuGQD8MQA
