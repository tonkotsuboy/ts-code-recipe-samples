type MyType<T extends "a" | "b" | "c"> = {
  foo: T;
};

// OK
const a: MyType<"a"> = {
  foo: "a",
};

// OK
const b: MyType<"b"> = {
  foo: "b",
};

// OK
const aOrC: MyType<"a" | "c"> = {
  foo: "c",
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAsiAq4IB55QgD2BAdgEwGcoAiAQ2KgB8SAjC64gY2ID4oBeKAbwCgooAZgHshALijwA3DwC+0ngHoFUAPIBpHoyE4CwKKXFxEkZGVYdufQSPFmANLPlLVGrTr01DCJKbptOvPzCYrTEDnI8isrqmtq6+ioATgDCXsYoZlQkzP6WQTbZYY5AA
