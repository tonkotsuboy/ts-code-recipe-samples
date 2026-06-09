const dataList = [
  { name: "田中", age: 24 },
  { name: "鈴木", age: 30 },
] as const;
dataList[0] = { name: "山田", age: 30 }; // エラー
dataList[0].name = "山田"; // エラー（ネストも読み取り専用）
dataList[0].age = 25; // エラー

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBAJgQyggMgS2jAvDA2gKBhgG8YwEBbAUwC4YAiQBldBaOXoBoYEBzWmAJgAsMAL5tCJMpV71ALEmAKc3acedAMwAGEWIC6nCDFCQoAbnyJk6aLjU6cpctTr1AjjqNF3XupFGYAeh8xACoZAS4ZAH4ZTJFQMKCstADp7KmwGF3pvP0DQwAh-wFmGQE6GQAmGQCCGQFqowH8GQDXlQCiGQCAdQApXQEh-8PMomNj3JL4AVjT-YJCgA
