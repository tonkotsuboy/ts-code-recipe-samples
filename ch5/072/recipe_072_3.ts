// 意図的な型エラーのデモ: name プロパティが欠けているため TS2741 が発生する
const user: {
  name: string;
  age: number;
} = {
  age: 24, // nameプロパティがないためコンパイルエラー
};
console.log(user);
