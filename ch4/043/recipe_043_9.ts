// 書籍: main.js の利用例。recipe_043_8.ts（add.js）を .js として読み込むデモ。
// 単体実行の都合上 import 行はコメント化し、同ファイル内に add を定義しています。
// import { add } from "./add.js";
function add(a: string | number, b: string | number): string | number {
  // @ts-expect-error ts(2365) number と string の + 演算を許容する JavaScript 的挙動の再現
  return a + b;
}

// 誤って数値の引数を文字列として渡している
const result = add(10, "2");
console.log(result); // 102
