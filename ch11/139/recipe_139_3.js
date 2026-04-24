// new なしで Error を作成する例。単体実行できるよう try/catch でラップしています。
try {
  throw Error("新しいエラーメッセージ");
} catch (error) {
  console.error(error);
}
