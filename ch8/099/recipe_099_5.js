// Recipe 099_5: ランダムに成功/失敗する非同期処理を Promise で実装する実例
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
