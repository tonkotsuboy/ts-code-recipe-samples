new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("エラーメッセージ");
  }, 3000);
}).catch((error) => {
  console.log(error); // "エラーメッセージ"
});
