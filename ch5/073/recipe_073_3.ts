type User = {
  name: string;
  age: number;
  address?: string;
};

const user3: User = {
  name: "佐藤",
  age: 30,
};

// 文字列ではないのでエラー
user3.address = 124;

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3gKClAdgQwFsIAuKOYRAS1wHMBubKfW0vAV0ICMlGd8AJgMQQ4cAPxkK1OowC+jTAGMA9rgpR2CRAGYy8JKgxMCxMgCJACvKAT0PMAaJizY6ADA4WZMAei9RA4aaA6tqA6EqA5gyA9gyAVgyAIgyAdgwhgBUMgJcMgD8MmFpIOgB0gsKicEYAjABMACz0QA
