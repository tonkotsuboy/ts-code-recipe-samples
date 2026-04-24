// 意図的な型エラーデモ: catch節のerrorがunknown型のままerror.messageを参照できないことを示す (期待エラー: TS18046)
try {
  // 何らかの処理を試みる
} catch (error: unknown) {
  console.log(error.message); // コンパイルエラー
}
