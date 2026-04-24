// CSSStyleDeclaration から top と left プロパティだけを取り出す
type MyStyle = Pick<CSSStyleDeclaration, "top" | "left"> & {
  // display プロパティは固定値にしたい場合
  display: "block" | "inline-block" | "none";
};

const myStyle: MyStyle = {
  display: "block",
  top: "10px",
  left: "20px",
};

function applyStyleToElement(element: HTMLElement, style: MyStyle) {
  element.style.display = style.display;
  element.style.top = style.top;
  element.style.left = style.left;
}
