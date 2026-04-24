const users = [
  { name: "田中太郎", email: "tanaka@example.com", isActive: true },
  { name: "佐藤花子", email: "sato@example.com", isActive: false },
  { name: "鈴木一郎", email: "suzuki@example.com", isActive: true },
];
// アクティブなユーザーにのみメール通知を送信
for (const user of users) {
  if (user.isActive) {
    console.log(`${user.name}（${user.email}）にメールを送信しました`);
  }
}
// 実行結果:
// 田中太郎（tanaka@example.com）にメールを送信しました
// 鈴木一郎（suzuki@example.com）にメールを送信しました
