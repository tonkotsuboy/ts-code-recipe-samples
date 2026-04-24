// Recipe 099_4: reject にエラーメッセージを渡して .catch で受け取る
new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("エラーメッセージ");
  }, 3000);
}).catch((error) => {
  console.log(error); // "エラーメッセージ"
});
