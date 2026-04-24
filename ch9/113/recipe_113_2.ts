// このファイルは意図的なコンパイルエラーデモです（TS18046）。
function processValue(value: unknown) {
  // エラー: valueはunknown型なので、toUpperCase()を呼び出せない
  console.log(value.toUpperCase());
}
