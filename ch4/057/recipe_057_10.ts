// OK
let num = 10;
num++;
// エラー
let str = "hello";
// @ts-expect-error ts(2356)
str++;
console.log(num, str);
