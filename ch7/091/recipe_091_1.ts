try {
  // 何らかの処理を試みる
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("不明なエラーが発生しました");
  }
}
