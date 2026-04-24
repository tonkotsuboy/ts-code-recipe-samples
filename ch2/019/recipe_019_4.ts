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
