function processUser(user) {
  console.log("処理開始");
  console.log(user.profile.name);
  // TypeError: Cannot read properties of undefined
  console.log("この行は実行されません"); // エラーによりここまで到達しない
}

const userData = { name: "田中" }; // profileプロパティが存在しない

processUser(userData);

console.log("プログラム終了"); // この行も実行されない

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/GYVwdgxgLglg9mABABwE5wgUwM7YKraaoAUIhqAlIgN4BQiiEC2cANpgHStwDmxARIDPFQGAugaNTA05r8KAbnqNmbTtz5kiHNHGAx2HMAEMAtphlyA9KcQAVAJ7JMAUVTpUALkQBhPWDBwoiVJh6ACYo6HaosDiImojgQZhaYJhBckxgLDrKAoDKDIB2DIAyEYD2DID52vmAqgyAMQyAfgyA2gyAyQxS0ojmiIAVDICXDIA-DIDWDIARDIBRDNnZVYDmDIAMSoAqCYDqDIBWDIAiDLQAvrS0adh+qqgAInpQeogAvDSI+kZu-IAMroC0cvyIi00tGlrsgOsMgLcMgIsMgGMMgMUMgDIMgA1tQAU6rMFrQNFhcAQiKRyDs9iZVgpMrwBO9AA0M7UABwyAIV9AGFyjWaFjy+UAQQylSrzIA
