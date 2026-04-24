// Recipe 099_2: reject を呼び出して Promise を失敗させ .catch で受ける
new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
}).catch(() => {
  console.log("Promiseが失敗しました");
});
