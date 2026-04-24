// 意図的な型エラーデモ: unknown型のまま.toFixed()を呼べないことを示す (期待エラー: TS18046)
function convertNumber(value: unknown): void {
  // コンパイルエラー
  value.toFixed(2);
}
