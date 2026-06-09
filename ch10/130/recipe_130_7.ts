type BasicElement = Omit<HTMLElement, "style" | "onclick">;

const element: BasicElement = document.createElement("div");

// styleプロパティにアクセスしようとするとエラーになる
element.style.color = "red"; // Error

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAQghgZwJYGMCiAbCBbCA7YKAXigHlslgAeACQBUBZAGUx32ABooAiBULblAA+PAPZ4UGVAGtuAPgDcAKCUpxfKBCy4CALliJUrHYRIATUSgCuJgHQoAThDjAIx9gApuZpADduAJTKSgD0IVB8IFiA6wyAtwyAiwyAYwyAxQyA1gyARQyA9QyA3QyAnQyA6gyAEQyAYgyAFgyAmgyA0QylgBUMgJcMgD8MqYBWDJVKWmwEtpFY9qIYog7EPE5m3ApQYVBoDg6DQA
