type MyType<T> = {
  foo: T;
};

const a: MyType<string> = {
  foo: "HELLO",
};

const b: MyType<number> = {
  foo: 120,
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAsiAq4IB54D4oF4oG8BQUUAZgPYkBcU8A3HgL614DGJAdgM7BQCGlcikZJwBOAS1YBzDNnyFSFKACIAEgFEAMuoDyigDT1GLDlwBGfBEmSsArgFsTEYdNwFiZSgEYATAAZ9DIA
