type A = {
  name: string;
};
type B = {
  age: number;
};
type Person = A & B;

const person: Person = {
  name: "太郎",
  age: 30,
};
