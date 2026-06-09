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

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/DYUwLgBATiDOD2wBuIBcEAUSCGwCuaEsYUAlgHYDmAlBALwB8ES8pAJgNwBQokMAViADGYdBhjYE5APzps5AJ61GzVpy5D45YhAAOUeAFtSsEPQjkQAdwgAFA8dMAeYmSoMM4uABpoIfspMAN5cEH4IyGZ04dxhAsKQ0QLcAL7U3FwA9JkQgDH6gNIMgJEMMBEogEkMgD4qgM4MgF+KgJoMXKZgACqkhiDweGCegRAhcXCIKBgARIAIRoD5SoDqDIB+DFOA+gwj6VwpvgCMAAxby1k5+kYmIJnxIhBlgP7ygBSugNHygBYMU4BmDIBDyoDmjoB2DID+DIAQ-4BU5leAZtGAKRVAHtqgH8EwCQ-1wWOw9A5DtxoWxMBheicwOkgA
