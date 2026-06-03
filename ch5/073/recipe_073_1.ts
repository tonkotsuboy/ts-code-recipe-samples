type User = {
  name: string;
  age: number;
  address?: string;
};

const user1: User = {
  name: "田中",
  age: 24,
  address: "東京都",
};

const user2: User = {
  name: "田中",
  age: 24,
};

console.log(user1, user2);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAqgzhATlAvFA3gKClAdgQwFsIAuKOYRAS1wHMBubKfW0vAV0ICMlGd8AJgMQQ4cAPxkK1OowC+jTAGMA9rgpR2CRAEYy8JKgxMCxMgCJADK6BaOXMAaJizYAmACwP+QkWIuBHc0A1coC-CfaYCpjKahpaSM762kZYOKZsVrYezKxkbg5hEeoqADYQAHQFKrQAFNG6dprazgCU9EA
