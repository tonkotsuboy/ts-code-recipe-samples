// Recipe 103_1: Promise<number> で解決値の型を明示する
const fetchData = (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(42); // ここで返される値は number 型
    }, 1000);
  });
};

fetchData().then((data) => {
  console.log("取得したデータ:", data); // data は number 型
});
