// cause オプションでエラーを連結する例。単体実行できるよう try/catch でラップしています。
try {
  const originalError = new Error("元となるエラーです");
  throw new Error("新しいエラーメッセージ", { cause: originalError });
} catch (error) {
  console.error(error);
  if (error instanceof Error && error.cause instanceof Error) {
    console.error("原因:", error.cause.message);
  }
}
