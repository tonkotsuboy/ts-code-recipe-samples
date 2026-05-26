function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: unknown, y: unknown) {
  if (typeof x === "string" && typeof y === "string") {
    return `${x}, ${y}`;
  } else if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }
  throw new Error("不正な引数です");
}

const result3 = add(10, "Hello"); // 型エラー
