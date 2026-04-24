// 書籍: 文字列に -= を適用すると TS2362 になる意図的なデモ。
let num = 10;
num -= 5;
// エラー
let str = "hello";
// @ts-expect-error ts(2362)
str -= 5;
console.log(num, str);
