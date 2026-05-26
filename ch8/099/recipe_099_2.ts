new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
}).catch(() => {
  console.log("Promiseが失敗しました");
});
