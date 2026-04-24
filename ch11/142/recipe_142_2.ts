// Error.cause の構文だけを示すスニペット。
// 書籍では構文紹介として単独のコードブロックになっているため、
// 単体実行できるよう発生源のエラーを自前で作り、最も外側で catch しています。
try {
  try {
    // なにかしらのエラーが発生する
    throw new Error("元のエラー");
  } catch (error) {
    throw new Error("エラーの内容", { cause: error });
  }
} catch (error) {
  console.error(error);
  if (error instanceof Error && error.cause instanceof Error) {
    console.error("原因:", error.cause.message);
  }
}
