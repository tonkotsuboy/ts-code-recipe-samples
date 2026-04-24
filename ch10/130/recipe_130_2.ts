// ブラウザ環境のDOM型を使う例。tsgoで型チェックする際はデフォルトlibで解決される。
type ElementColors = Pick<CSSStyleDeclaration, "color" | "backgroundColor">;

const myColors: ElementColors = {
  color: "blue",
  backgroundColor: "lightgray",
};

console.log(myColors);
