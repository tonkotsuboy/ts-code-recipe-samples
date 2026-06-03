let attempts = 0;
const maxAttempts = 100; // 安全装置

while (true) {
  console.log("処理中...");
  attempts++;

  // 特定の条件で抜ける
  if (Math.random() > 0.9) {
    console.log("成功！");
    break;
  }

  // 安全装置：無限ループを防ぐ
  if (attempts >= maxAttempts) {
    console.log("最大試行回数に達しました");
    break;
  }
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/DYUwLgBAhmYgtgBzAZwgXggBgNwCgBjAewDsVJ4oAPAQVgWTUwEYtcIB6DiQSO1ALRUCjEYDt-PHgDuACwCWoCAAowAJwCuIAJQQA3nggRiZIqAB0wIgHM5AIkBnioDAXQLRyRp5bX5dMOElQBqb-h2c3ICeToBZ2oB2DICG5oBvcoDmDIA5RoCKDIDRDAFSAGbyALIwEkaKUCQAJkTwchoAfNhGAJwa2rq6+iiGICbmVoAIRoD5SoCA-y5uDQBGiiBQANYDAL6iuly8gkKAWP+AhI6ACmmA1wyAPwyA6wyASQyATGmACgypGXIeDKgQ5ZiUtPReKHUBjaTNxqYWloAA5oDkmoBmUYAZCMAe2qAB1NANYMgBUEwDqDIA-BihgH0GfrPCDDUYTALTSZAA
