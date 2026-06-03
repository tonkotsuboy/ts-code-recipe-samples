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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBArhApgJwjAvDA2gKBjAbxjAEMBbRALhgCJAGV0Fo5QKk1A5hJoBoZEySBLAG2o0oJUgGsSAAUQAPcgAd+iAHSgyHGLwgBBYFF4A3KjCjI4iGAF92eQsXLGagBXlAJ6GBGoMAK2hu59BtCCRQINJyZIoqahpauvpG1ABmJPxIVjb4RKQUQoAsSYAU5oAAcmycPgJCEHAAXnBivCEKSqog6pzReobGpuapOAC6ANw4OAD0QzCARQyA9QyAYwyAxQyAawyAVgyAZwyAPwyAbQwrgNYMgHYMgP4MgIcMK4DXDIBYCYCn7oBJDICACYCH8jjxIMgwABSgkLAIKDAg8fBIqABKQi2Xi-Z6fZDKVqxRBAgi2fBvCAgBr8EAAc2eAAMACQECHKTKISyACH+8QSSvxLIBIf82hyO1xugHUGQB+DEzAPoMWIBA3wlhwfOGo0A+dqAGQjAAq+gBzzSiCmCMVgkkTiKSyeoRJq0+mM1kcmV5Qok8pVGp1MINNQa45atnsoA
