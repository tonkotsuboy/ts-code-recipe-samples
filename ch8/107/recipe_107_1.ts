new Promise<void>((resolve) => {
  setTimeout(() => {
    console.log("10秒後に成功しました");
    resolve();
  }, 10_000);
});
