const array = [1, null, 2, undefined, 3];
const result = array.filter((item) => item != null);
console.log(result); // [1, 2, 3]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBAhgJwXAnjAvDA2gRgDQxgCuANiQQEwFFgAmApgGYCWY9tBAzALoDcAUKEiwE9CKViZEyFADoWJKPQQAKFcyUBbAJQYAfDA31NMAISZiZbQKEQQJerJIgA5itHjF1mAHof2fBgqGB4gA
