// タイマーIDを保存（ブラウザーではnumber、Node.jsではTimeoutオブジェクト）
const timerId = setTimeout(() => {
  console.log("5秒経過しました");
}, 5000);

// 必要に応じてタイマーをキャンセル
clearTimeout(timerId);
