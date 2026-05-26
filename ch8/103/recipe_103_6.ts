const fetchDataWithErrorHandling = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(42);
      } else {
        reject(new Error("データ取得に失敗しました"));
      }
    }, 1000);
  });
};

fetchDataWithErrorHandling()
  .then((data) => {
    console.log("取得したデータ:", data); // number型
  })
  .catch((error: unknown) => {
    // エラーがError型であるかを実行時に確認
    if (error instanceof Error) {
      console.error("エラー:", error.message);
    } else {
      console.error("未知のエラー:", error);
    }
  });
