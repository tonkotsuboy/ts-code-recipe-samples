// Recipe 107_1: 10秒後に成功する Promise（AbortController で止める対象）
new Promise<void>((resolve) => {
  setTimeout(() => {
    console.log("10秒後に成功しました");
    resolve();
  }, 10_000);
});
