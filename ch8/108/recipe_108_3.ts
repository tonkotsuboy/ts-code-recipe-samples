// Recipe 108_3: Promise.withResolvers を使った簡潔な書き方
const { promise, resolve, reject } = Promise.withResolvers<string>();
setTimeout(() => {
  resolve("成功しました");
}, 1000);

// 参照のみ（未使用警告回避）
void promise;
void reject;
