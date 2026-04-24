// 書籍: 文字列に ++ を適用すると TS2356 になる意図的なデモ。
// OK
let num = 10;
num++;
// エラー
let str = "hello";
// @ts-expect-error ts(2356)
str++;
console.log(num, str);
