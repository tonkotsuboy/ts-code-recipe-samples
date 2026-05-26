new Promise<void>((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
}).then(() => {
  console.log("Promiseが成功しました");
});
