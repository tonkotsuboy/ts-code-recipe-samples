type A = {
  name: string;
  age: number;
};
type B = {
  age: string;
};
type C = A & B;

const c1: C = {
  name: "太郎",
  age: 30, //  エラー: number型はnever型に代入できません
};

const c2: C = {
  name: "太郎",
  age: "三十", // エラー: string型はnever型に代入できません
};
