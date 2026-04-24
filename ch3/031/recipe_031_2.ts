// 意図的な型エラーデモ（TS2741）。Person型はnameとageの両方を要求するので、片方欠けるとエラー
// 書籍では直前のrecipe_031_1で宣言したPersonを流用していますが、単体で動くよう再掲しています
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
