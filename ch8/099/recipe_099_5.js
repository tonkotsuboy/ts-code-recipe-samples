new Promise((resolve, reject) => {
  setTimeout(() => {
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      resolve({ id: 1, name: "鈴木" });
    } else {
      reject(new Error("データ取得に失敗しました"));
    }
  }, 2000);
})
  .then((data) => {
    console.log("取得したデータ:", data);
  })
  .catch((error) => {
    console.log("エラー:", error.message);
  });
