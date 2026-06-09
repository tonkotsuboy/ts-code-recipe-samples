// import { add } from "./add.js";
function add(a: string | number, b: string | number): string | number {
  // @ts-expect-error ts(2365) number と string の + 演算を許容する JavaScript 的挙動の再現
  return a + b;
}

// 誤って数値の引数を文字列として渡している
const result = add(10, "2");
console.log(result); // 102

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/PTAEEsFsAcHsCcAuoDeoCGATToC+oAzeWSUAIgDpgtMKArAZzIG4AoAgVwDsBjRcWFwzYAFOgBcoBonjguAc1AAfUFw6QARgFN4AGlAbJ02QuWr12+AEojMuYpVrNO1K1CgQoAAKIGAWi0AD2gtPgD4YnhQXxEAJgBmADYAVitzZyjACwYpO1NAOwZQAGpQQBR7QHTvQCSGQEYowE7tQE0GQGiGUAApdAA3dABlHlloZEAQt0BMY0BVpTzAWMVAP+c3UHgtRA54IXQigzZcVlZPQBKowGMGQDMGQAdTQBIFPMBUfQOKwHDTQHVtQHQlTMB1Bj3AQjsnwBEGBtYeQWkZrQYOAAbZAAXmEmBEAEYAAz6MixMhWNjfLgMWCArQUQGweQiWYA4FIjxgGGxIA
