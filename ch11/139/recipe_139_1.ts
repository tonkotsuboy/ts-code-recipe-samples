try {
  // エラーオブジェクトを生成して投げる
  throw new Error("エラーが発生しました");
} catch (error) {
  console.error(error);
}
