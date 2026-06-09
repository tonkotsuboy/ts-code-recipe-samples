type User = {
  name: string;
  age: number;
  address?: string;
};

const user2: User = {
  name: "田中",
  age: 24,
};

console.log(user2.address); // undefined

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3gKClAdgQwFsIAuKOYRAS1wHMBubKfW0vAV0ICMlGd8AJgMQQ4cAPxkK1OowC+jTAGMA9rgpR2CRACYy8JKgxMCxMgCJADK6BaOXMAaJizY6ALA4WZlauCoA2EADpfFVoACi0kHQDBYVE4AEp6KAB6ZM1cAQgAMxoIASA
