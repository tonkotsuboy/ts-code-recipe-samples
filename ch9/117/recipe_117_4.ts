type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "鈴木",
  age: 24,
} as const; // as constより型注釈が優先される

// user.nameはstring型、user.ageはnumber型

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3gKClAdgQwFsIAuKOYRAS1wHMBubKfW0vAV0ICMlGBfRpgDGAe1wUo7BIjLwkqDEwLEyAIkAsSYApzVQBomLNgCYALHr7M4UUeOD0oAensWrYioAiGQFEMgaPVAFzaAJxMAZBkAqRUAJRUBVBkAYhkBohkxMR0lpADplCEB7BgpqOi9AQAYpJESDVNxOHkQvIA
