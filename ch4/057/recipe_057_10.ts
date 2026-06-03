// OK
let num = 10;
num++;
// エラー
let str = "hello";
// @ts-expect-error ts(2356)
str++;
console.log(num, str);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/PTAEHkGkCgBsFMAuoB2BXAtqAvKAjAAwDc06GA1OSSKIBUMglwyA-DHEqAM6IBOOoARABbxYsAPa9qYAAKI2AWngAPAA7wAxonmdOI7jIAUAJgDMAVgBsASmgdOlEqpEo2IhADpRAcz1kANOy4WREA
