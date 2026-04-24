// 意図的な型エラーデモ: useUnknownInCatchVariables有効時にerrorがunknown型となり、error.messageを参照できないことを示す (期待エラー: TS18046)
try {
  // 何らかの処理を試みる
} catch (error) {
  console.log(error.message); // コンパイルエラー
}
