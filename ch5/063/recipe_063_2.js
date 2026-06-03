const users = [
  { name: "鈴木", age: 18 },
  { name: "田中", age: 24 },
  { name: "後藤", age: 36 },
];

const adults = users.filter((user) => user.age >= 20);

console.log(adults);
// [{ name: "田中", age: 24 }, { name: "後藤", age: 36 }]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBArhApgJwjAvDA2gKBjAbxjAEMBbRALhgCJAWJMApzGgGhhIHMqYBGADhgC+zPIWLkuNQAyugWjkWbTtQBMAFkHD8RUhWo1AMfqAT0LkcuAZgBsanAF0A3DhyhIsEgBM4AGyhpMCFBAB0AGYAlp4oABThvsgAlBgAfPBIyP7GMPGYigAMMXYO4BAg7oj+7iDs4a4eXrk4APR12JriOjJGCjAqaqJaEgbtphYCVkA
