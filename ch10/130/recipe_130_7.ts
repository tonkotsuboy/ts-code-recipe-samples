type BasicElement = Omit<HTMLElement, "style" | "onclick">;

const element: BasicElement = document.createElement("div");

// styleプロパティにアクセスしようとするとエラーになる
element.style.color = "red"; // Error
