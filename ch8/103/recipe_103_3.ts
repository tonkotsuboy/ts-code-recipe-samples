const fetchData = (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("こんにちは"); // numberではないので型エラーになる
    }, 1000);
  });
};

fetchData();
