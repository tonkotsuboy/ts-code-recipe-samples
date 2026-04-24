// noUnusedParameters: true で未使用の引数はコンパイルエラーになります。
// 期待エラーコード: TS6133 - 'unusedParam' is declared but its value is never read.
function greet(message: string, unusedParam: number) {
  console.log(message);
}
