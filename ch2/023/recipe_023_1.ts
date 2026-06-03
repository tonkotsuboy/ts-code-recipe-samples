type User = {
  name: string;
  details?: { age: number };
};

const user1: User = { name: "鈴木", details: { age: 25 } };
console.log(user1.details?.age); // 25

const user2: User = { name: "田中" };
console.log(user2.details?.age); // undefined

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAqgzhATlAvFA3gKClAdgQwFsIAuKOYRAS1wHMBubKAEwmHyoBs4B+M9KPlqk8AV0IAjJFAC+jOZkwBjAPa4KUUQkQBGMvGloBBYmQBEgFiTAFOZmANCzYdu-QcLIAmAKyzZjVepVOCAA6ThVaAAotJB1g1nYuXmChCABKeigAekyoL0V-DWjEd31tVAw8IhEzQAZXQFo5M19lNThAkLDIovc4x0SeZOF0rJzRXFYAMxoIZiA
