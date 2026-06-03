type User = {
  name: string;
  age: number;
};

// エラー
const invalidUser: User = {
  name: "鈴木",
};

console.log(invalidUser);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAqgzhATlAvFA3gKClAdgQwFsIAuKOYRAS1wHMBubKfW0vAV0ICMlGBfRpgD0QqIAqGQJcMgH4ZMAYwD2uClBoA3fABsqAE3hIye5Giw4CxMgCJALEmAKcwsAaTAMxzFceRogA6DfNoAKNU0dQwBKeiA
