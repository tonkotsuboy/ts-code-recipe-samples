type ElementColors = Pick<CSSStyleDeclaration, "color" | "backgroundColor">;

const myColors2: ElementColors = {
  color: 123, // コンパイルエラー
  backgroundColor: "lightgray",
};

console.log(myColors2);
