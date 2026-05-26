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
