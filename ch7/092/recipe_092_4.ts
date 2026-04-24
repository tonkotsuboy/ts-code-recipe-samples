// 意図的な型エラーデモ: noImplicitAny有効時に引数messageが暗黙のany型となることを示す (期待エラー: TS7006)
// messageの型が暗黙的にany型になるため、コンパイルエラー
function greet(message) {
  console.log(message);
}
