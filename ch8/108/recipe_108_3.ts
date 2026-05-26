const { promise, resolve, reject } = Promise.withResolvers<string>();
setTimeout(() => {
  resolve("成功しました");
}, 1000);

// 参照のみ（未使用警告回避）
void promise;
void reject;
