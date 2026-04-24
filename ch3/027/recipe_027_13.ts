// 意図的な型エラーデモ（TS7006）。strict（noImplicitAny）では引数が暗黙anyで型エラーになる
function badFunction(x, y) {
  return x * y;
}
