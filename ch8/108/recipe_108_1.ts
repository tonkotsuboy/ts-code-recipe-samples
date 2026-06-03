const { promise, resolve, reject } = Promise.withResolvers<string>();

// 外部からPromiseを解決できる
setTimeout(() => {
  resolve("成功しました");
}, 1000);

// Promiseの結果を待つ
promise.then((result) => {
  console.log(result); // "成功しました"
});

// reject は使用例として参照のみ
void reject;

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBA3jADgJxAWwJYQKYBobLYQgA2AbngdgFbbCwC+MAvDAAqqY4B0A7hlAAWAJSKkKyCAB5oyDGADmAPgAUASgDcAKC0B6XTEBomoAuEwNIMgSIYO6LNkBJDIGPIwF42gcwZAsgyBohi04oAFQxpsEABXKBV1FiV4LRgqYnJsFQAiQAQjQHylQHUGQD8GdMB9BkTNLQZ8AEYABnKCvQMrLmxAOwZABV9AHPNbQFD9QBMGLRRrHiFsMDDCCCCSKDUIqJjQSFJsbhIQBRUhkbGNGH0YFIzsvMLKzcJaehhAewZAf3lACldAaPlACwZ0wDMGQCHlQHNHOsB-Bi0yEAwAEypjlANEA
