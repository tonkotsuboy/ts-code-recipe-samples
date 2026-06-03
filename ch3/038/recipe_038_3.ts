type MyType<T extends "a" | "b" | "c"> = {
  foo: T;
};

const c: MyType<"d"> = {
  foo: "d",
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAsiAq4IB55QgD2BAdgEwGcoAiAQ2KgB8SAjC64gY2ID4oBeKAbwCgooAZgHshALijwA3DwC+0noyE4CwKI3FxEkZMTysO3PoJHjdxADSzJQA
