const users = [
  { name: "鈴木", age: 12 },
  { name: "田中", age: 20 },
  { name: "佐藤", age: 20 },
];
const filteredUsers = users.filter((user) => user.age >= 20);
console.log(filteredUsers);
// [{ name: "田中", age: 20 }, { name: "佐藤", age: 20 }]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBArhApgJwjAvDA2gKBjAbxjAEMBbRALhgCJAWJMApzGgGhhIHMqYBGAJhgC+zPIWLkuNQAyugWjkWbTtV4AGQcPxFSFajUAK8oBPQuRy7LVOALoBuHKEiwAZgEsANlBSIAJgFUkqDPB8QAHSOLigAFGEIKACUGAB8-iiBRjBxmMrRVjYQIE6IgU4g7GEhrsge3igQmTgA9LXYGuLaMoYKMCZCopoS+m3GKgJmQA
