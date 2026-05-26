type A = {
  name: string;
};
type B = {
  age: number;
};
type Person = A & B;

// ageがないのでエラー
const a: Person = {
  name: "太郎",
};

// nameがないのでエラー
const b: Person = {
  age: 18,
};
