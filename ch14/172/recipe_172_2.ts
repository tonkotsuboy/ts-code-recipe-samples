// noFallthroughCasesInSwitch: true で、case 500 に break がないためコンパイルエラーになります。
// 期待エラーコード: TS7029 - Fallthrough case in switch.
function handleResponse(code: number): void {
  switch (code) {
    case 200:
      console.log("Success");
      break;
    case 500:
      console.log("Server Error"); // breakがないためエラー
    default:
      console.log("Unknown");
  }
}
