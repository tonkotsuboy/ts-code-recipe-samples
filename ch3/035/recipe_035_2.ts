type MyType<T> = {
  foo: T;
};

const a: MyType<string> = {
  foo: "HELLO",
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAsiAq4IB54D4oF4oG8BQUUAZgPYkBcU8A3HgL614DGJAdgM7BQCGlcikZJwBOAS1YBzDNnyFSFKACIAEgFEAMuoDyigDT1qQA
