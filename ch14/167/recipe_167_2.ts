// noImplicitAny（strict: true）下で、暗黙のany型を含む引数はエラーになります。
// 期待エラーコード: TS7006 - Parameter 'value' implicitly has an 'any' type.
function calculate(value) {
  // エラー: Parameter 'value' implicitly has an 'any' type.
  return value * 2;
}
