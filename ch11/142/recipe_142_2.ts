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
