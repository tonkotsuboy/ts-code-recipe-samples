type User = {
  name: string;
  age: number;
  address?: string;
};

const user3: User = {
  name: "佐藤",
  age: 30,
};

user3.address = "北海道";
console.log(user3);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3gKClAdgQwFsIAuKOYRAS1wHMBubKfW0vAV0ICMlGd8AJgMQQ4cAPxkK1OowC+jTAGMA9rgpR2CRAGYy8JKgxMCxMgCJACvKAT0PMAaJizY6ADA4WZMWpDoB0g4VE4I3NAdGVAd1tAZQTzRlV1FQAbCF8ElVoACm9dAEp6IA
