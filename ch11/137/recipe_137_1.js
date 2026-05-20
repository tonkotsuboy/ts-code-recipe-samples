function processUser(user) {
  console.log("処理開始");
  console.log(user.profile.name);
  // TypeError: Cannot read properties of undefined
  console.log("この行は実行されません"); // エラーによりここまで到達しない
}

const userData = { name: "田中" }; // profileプロパティが存在しない

processUser(userData);

console.log("プログラム終了"); // この行も実行されない
