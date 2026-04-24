// 意図的に型エラーを発生させるデモ（TS2322: number は string に代入不可）。
type ElementColors = Pick<CSSStyleDeclaration, "color" | "backgroundColor">;

const myColors2: ElementColors = {
  color: 123, // コンパイルエラー
  backgroundColor: "lightgray",
};

console.log(myColors2);
