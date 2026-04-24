// Recipe 108_2: 従来の方法 — resolve/reject を変数に代入して外部で使う
let resolve: (value: string) => void;
let reject: (reason?: any) => void;
const promise = new Promise<string>((res, rej) => {
  resolve = res;
  reject = rej;
});

// 後からresolveを呼び出す
setTimeout(() => {
  resolve("成功しました");
}, 1000);

// promise/reject を使用例として参照のみ（未使用警告回避）
void promise;
void (() => reject);
