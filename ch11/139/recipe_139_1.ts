// 書籍の例は素の throw で停止するため、単体実行できるよう try/catch でラップしています。
try {
  // エラーオブジェクトを生成して投げる
  throw new Error("エラーが発生しました");
} catch (error) {
  console.error(error);
}
