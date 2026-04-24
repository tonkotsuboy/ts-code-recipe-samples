const users = [
  { id: 1, name: "鈴木" },
  { id: 2, name: "田中" },
  { id: 3, name: "佐々木" },
  { id: 4, name: "後藤" },
];
for (const user of users) {
  if (user.id === 3) {
    console.log(`ユーザーが見つかりました: ${user.name}`);
    break;
  }
}
// 実行結果: ユーザーが見つかりました: 佐々木
