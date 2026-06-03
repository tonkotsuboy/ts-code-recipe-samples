// HTMLElementからstyleとonclickを除外した型
type BasicElement = Omit<HTMLElement, "style" | "onclick">;

// BasicElement型の変数を作成
const element: BasicElement = document.createElement("div");

// idやtagNameなど、除外されなかったプロパティにはアクセス可能
element.id = "my-element";
console.log(element.tagName); // "DIV"

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/PTAEAkBUFkBkFEA2BTAtsgdgF0NIMhIhgGcsBPFQCwYB7DAY0QEtqBrQJIZATNMDRNQdQZB9BkGj1AKBIAHZKABCAQwIMkaTFlABeUAHlUdLAB4ocWemwAaUACIipZMdAAfE1VoNGxgHwBufvxDipMlPqy9AOwZASE1AB1NmQB15QAQjfmoqIlBkX3kALi9paj15JVAAEwpqAFc-ADpqACdkCSxkTOwACmMcugA3YwBKNw8wOhzAEIYsCQBzADkJdEArBkBLBkBABg5AVQZAGIZxnEBjBm5AdYZAW4ZARYZAMYZAYoZAawZAewZAIoZAeoZAboZAToZAe+VAX4D+RLlsYp7s41RiAFpnv2M3LEMAQKChiogKIM6n95MUBiMxsgOqBPMYACIASQAasYgA
