// 単体ファイルのエラーハンドリング例です。import先は意図的に存在しないパスのため、
// tsgo --noEmit では TS2307 "Cannot find module './nonexistent-module'" が出ます。
// 実行時もPromiseがrejectされ、catch節のフォールバック処理に入ることを確認できます。
async function loadModuleWithErrorHandling() {
  try {
    const module = await import("./nonexistent-module");
    console.log("モジュール読み込み成功:", module);
  } catch (error) {
    console.error("モジュール読み込み失敗:", error);
    // フォールバック処理
    console.log("デフォルトのモジュールを使用します");
  }
}

loadModuleWithErrorHandling();
