type MyType<T extends { a: string }> = {
  foo: T;
};

const myObj: MyType<{ a: string }> = {
  foo: { a: "a" },
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAsiAq4IB55QgD2BAdgEwGcoBvKAQwC4oDgAnASxwHMoBfAPigF4SAoKKADMA9sKrwA3L1ZTeAY2E4aUALYgA8gCMAVlTiJIyUpWp1GLDtz4CRYkuSoAiMo7YAaaRKA
