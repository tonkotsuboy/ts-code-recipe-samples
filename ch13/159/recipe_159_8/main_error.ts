// 型エラーのデモ: 存在しないメソッドにアクセスすると
// TS2339 "Property 'nonExistentMethod' does not exist on type ..." を期待します。
async function demoError() {
  const utils = await import("./utils");
  utils.nonExistentMethod();
  // エラー：Property 'nonExistentMethod' does not exist
}

demoError();
