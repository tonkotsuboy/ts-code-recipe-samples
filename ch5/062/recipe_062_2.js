const users = [
  { name: "鈴木", age: 18 },
  { name: "田中", age: 24 },
  { name: "後藤", age: 36 },
];

const result = users.map((user) => user.name);

console.log(result);
// ["鈴木", "田中", "後藤"]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBArhApgJwjAvDA2gKBjAbxjAEMBbRALhgCJAWJMApzGgGhhIHMqYBGADhgC+zPIWLkuNQAyugWjkWbTtQBMAFkHD8RUhWo1AMfqAT0LkcuAZgBsanAF0A3DhyhIsZIghwANrEwIUEAHRkJAAOABQhPsgAlBgAfPBIyH5aiJF2DuAQIO6Ifu4g7CEubp6pOAD0Zdj0TKxSsrUGNFZAA
