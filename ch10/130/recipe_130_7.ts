// 意図的に型エラーを発生させるデモ（TS2339: 'style' は Omit で除外済み）。
type BasicElement = Omit<HTMLElement, "style" | "onclick">;

const element: BasicElement = document.createElement("div");

// styleプロパティにアクセスしようとするとエラーになる
element.style.color = "red"; // Error
