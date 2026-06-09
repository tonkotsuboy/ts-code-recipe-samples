type MyType<T extends { a: string }> = {
  foo: T;
};

const myObj2: MyType<{ a: string; b: number }> = {
  foo: { a: "a", b: 2 },
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAsiAq4IB55QgD2BAdgEwGcoBvKAQwC4oDgAnASxwHMoBfAPigF4SAoKKADMA9sKrwA3L1ZTeAY2E4aUALYgA8gCMAVgCYqcRJGSlK1OoyYSomqjgCuKzRFptOPYvyGiqpqgCIyfwAaGypdNmDpCSA
