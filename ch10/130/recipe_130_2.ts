type ElementColors = Pick<CSSStyleDeclaration, "color" | "backgroundColor">;

const myColors: ElementColors = {
  color: "blue",
  backgroundColor: "lightgray",
};

console.log(myColors);
