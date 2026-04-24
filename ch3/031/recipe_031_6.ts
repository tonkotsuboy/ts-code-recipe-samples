// 意図的な型エラーデモ（TS2322）。C型のageはnumber&stringでnever型になるので、どんな値も代入不可
// 書籍では直前のrecipe_031_5で宣言したCを流用していますが、単体で動くよう再掲しています
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
