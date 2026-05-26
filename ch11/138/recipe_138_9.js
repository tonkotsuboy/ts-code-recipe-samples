function handleError(error) {
  if (error instanceof TypeError) {
    console.log("型に関するエラーです:", error.message);
    // 型エラー専用の処理
  } else if (error instanceof ReferenceError) {
    console.log("参照に関するエラーです:", error.message);
    // 参照エラー専用の処理
  } else if (error instanceof RangeError) {
    console.log("範囲に関するエラーです:", error.message);
    // 範囲エラー専用の処理
  } else {
    console.log("その他のエラーです:", error);
    // 一般的なエラー処理
  }
}

try {
  // エラーが発生する可能性のあるコード
  const obj = null;
  obj.method();
} catch (error) {
  handleError(error);
}
