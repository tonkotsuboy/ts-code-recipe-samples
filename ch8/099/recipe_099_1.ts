// Recipe 099_1: 3秒後に成功する Promise を生成して .then で結果を受ける
// 書籍との差分: 書籍は `new Promise((resolve, reject) => ...)` ですが、
// strict 設定の tsgo では `resolve()` の引数型を推論できないため `Promise<void>` を明示しています。
new Promise<void>((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
}).then(() => {
  console.log("Promiseが成功しました");
});
