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
