// Recipe 099_3: resolve にデータを渡して .then で受け取る
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("成功データ");
  }, 3000);
}).then((data) => {
  console.log(data); // "成功データ"
});
