let num = 10;
num -= 5;
// エラー
let str = "hello";
// @ts-expect-error ts(2362)
str -= 5;
console.log(num, str);
