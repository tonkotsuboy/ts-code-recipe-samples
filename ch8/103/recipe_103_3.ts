// Recipe 103_3: 意図的な型エラーデモ — Promise<number> に string を resolve するとコンパイルエラー（TS2345）
const fetchData = (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("こんにちは"); // numberではないので型エラーになる
    }, 1000);
  });
};

fetchData();
