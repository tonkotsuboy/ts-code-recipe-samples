type User = {
  name: string;
  age: number;
};

type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  name: "田中",
  age: 24,
};

user.name = "鈴木"; // エラー

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAqgzhATlAvFA3gKClAdgQwFsIAuKOYRAS1wHMBubKfW0vAV0ICMlGBfRplCQoAJQj4AJgHtcAGxDwkqMRJnyQAHiWIAfIIDGsilHYJEZcVNkKdKrDgLEyAIkAMroFo5FwBomLNgBMACy+ApiYZkgAdE7QaC6ALEmAFOYu9FAA9OlQgBUMgJcMgD8MQA
