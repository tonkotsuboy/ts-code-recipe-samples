// オーバーロードシグネチャ
function add(x: number, y: number): number;
function add(x: string, y: string): string;
// 実装
function add(x: unknown, y: unknown) {
  if (typeof x === "string" && typeof y === "string") {
    return `${x}, ${y}`;
  } else if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }
  throw new Error("不正な引数です");
}

const result1 = add(10, 20); // 30
const result2 = add("Hello", "world!"); // "Hello, world!"

console.log(result1); // 30
console.log(result2); // Hello, world!
