// throw で後続の処理が実行されない様子を確認する例。
// 書籍では processData(-1) でプロセスが落ちるため、ここでは try/catch を足して
// 最後の console.log まで到達することを確認できるようにしています。
function processData(value) {
  console.log("処理開始");
  if (value < 0) {
    throw new Error("値は0以上である必要があります");
  }
  console.log("この行は値が負の場合実行されません"); // エラー時は実行されない
  console.log(`処理結果: ${value * 2}`);
}

processData(5); // 正常に実行される
console.log("---");

try {
  processData(-1); // エラーが発生し、以降の処理が停止
  console.log("この行は実行されません"); // エラーにより実行されない
} catch (error) {
  console.error(error);
}
