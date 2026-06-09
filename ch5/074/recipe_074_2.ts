const user = {
  name: "田中",
  age: 30,
  hobby: ["読書", "旅行", "ゲーム"],
};

// string[]
const keys = Object.keys(user);

// (string | number | string[])[]
const values = Object.values(user);

// [string, string | number | string[]][]
const entries = Object.entries(user);

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBArhApgJxgXhgbwFAxmAQwFtEAuGAIkAZXQWjkKAaXGAgczJgGYAGRvACxAAjQQE9yAbQqBaqMAfZg0qBR00AyEfIqAmhkA-DIAOGCgF1GAXwDc2bAHozMaMgCWYFuN3ZQkWAGtEIiOhgB5QQBWiMBQAHQeXgAUCCgAlCbmlpHWdiwwAD74cESCKBlWULb2jrGOzuDQMABuBAA2cIjeGP5BIaE19Y3RSMjxphYw4in29AVFaZlg2bmomcMOurplLpWIYIU2jT4twWFrG10xvUZAA
