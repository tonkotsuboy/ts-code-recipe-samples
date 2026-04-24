// noUnusedLocals: true で未使用変数はコンパイルエラーになります。
// 期待エラーコード: TS6133 - 'unusedVariable' is declared but its value is never read.
function example() {
  // 未使用の変数
  let unusedVariable = "This is an unused variable";
  console.log("Function executed");
}
example();
