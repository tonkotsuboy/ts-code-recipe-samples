let count = 0;

while (true) {
  count++;
  console.log(`カウント: ${count}`);

  // 5に達したらループを抜ける
  if (count === 5) {
    console.log("ループを終了します");
    break;
  }
}

// 実行結果: カウント: 1, カウント: 2, ... カウント: 5, ループを終了します
