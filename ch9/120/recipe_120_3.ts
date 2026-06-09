type User = {
  id: number;
  name: string;
  age: number;
};

// すべてのプロパティをstring型に変換
type UserAsStrings = {
  [K in keyof User]: string;
};
// { id: string; name: string; age: string; }

const userForm: UserAsStrings = {
  id: "1",
  name: "鈴木",
  age: "30",
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3gKClAlgEwC4oA7AVwFsAjJAbm1IEMKJi5hFcSBzenR7q1KUaiegF96mAPTSogTQZAngyAzBkB2DIHWGQLcMgRYZAYwyBihkBJDO049A0eqBrBkCQmoG3jTKEiwEiAIJwAyhy7c4qDAwBtAGk8EigAawgQAHsAMyckAF02Lx4JelkMPCIoE29aJhYU014oASE8tKhxTEwAY2iSdigyZwAxaMQKYngkN08S3zQsHAJiACIARnGAGgYSZiFxwBYkwApzWYZyiYBmAAYNySA
