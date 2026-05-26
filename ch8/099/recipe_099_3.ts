new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("成功データ");
  }, 3000);
}).then((data) => {
  console.log(data); // "成功データ"
});
