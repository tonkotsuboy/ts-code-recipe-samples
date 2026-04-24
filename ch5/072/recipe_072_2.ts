// 意図的な型エラーのデモ: age プロパティに文字列を代入しているため TS2322 が発生する
const user: {
  name: string;
  age: number;
} = {
  name: "田中",
  age: "二十四歳", // コンパイルエラー
};
console.log(user);
