// Recipe 104_1: async/await を使って Promise の解決値を同期的な見た目で受け取る
function fetchData(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(42); // 非同期で値を返す
    }, 1000);
  });
}

async function processData() {
  const data = await fetchData(); // Promiseの解決を待つ
  console.log("取得したデータ:", data); // dataはnumber型
}

processData();
