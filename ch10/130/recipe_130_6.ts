// HTMLElementからstyleとonclickを除外した型
type BasicElement = Omit<HTMLElement, "style" | "onclick">;

// BasicElement型の変数を作成
const element: BasicElement = document.createElement("div");

// idやtagNameなど、除外されなかったプロパティにはアクセス可能
element.id = "my-element";
console.log(element.tagName); // "DIV"
