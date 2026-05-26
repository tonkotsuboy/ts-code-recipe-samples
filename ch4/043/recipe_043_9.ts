// import { add } from "./add.js";
function add(a: string | number, b: string | number): string | number {
  // @ts-expect-error ts(2365) number と string の + 演算を許容する JavaScript 的挙動の再現
  return a + b;
}

// 誤って数値の引数を文字列として渡している
const result = add(10, "2");
console.log(result); // 102
