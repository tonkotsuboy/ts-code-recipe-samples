// Recipe 098_6: setInterval でサーバーステータスを定期確認し、ボタンで停止する
// 書籍ではブラウザー実行前提。document を使うため、ブラウザーか DOM 型入りの環境で実行する
function fetchServerStatus() {
  console.log("サーバーのステータスを確認中");
  // 仮想のAPIリクエストを行うことを想定
  console.log("サーバーは稼働中です");
}

// 監視を停止するボタンが存在する場合のみ監視を開始
const stopButton = document.querySelector("#stop-button");
if (stopButton) {
  // 10秒ごとにサーバーのステータスを確認
  const intervalId = setInterval(fetchServerStatus, 10000);
  stopButton.addEventListener("click", () => {
    clearInterval(intervalId);
    console.log("サーバー監視を停止しました");
  });
}
