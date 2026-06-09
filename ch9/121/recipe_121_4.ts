type User = {
  name: string;
  age: number;
};

type UserName = User["name"]; // string
type UserAge = User["age"]; // number

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3gKClAdgQwFsIAuKOYRAS1wHMBubKfW0vAV0ICMlGBfRplCRYCRADki0NPCQBtAEQFiCgLr0oAek3lKNWkPDRZiAIKtUo+QpYQ1G7R25IgA
