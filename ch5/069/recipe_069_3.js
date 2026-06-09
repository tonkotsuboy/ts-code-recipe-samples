const users = [
  { name: "田中", age: 24 },
  { name: "鈴木", age: 18 },
  { name: "佐藤", age: 36 },
];

const sortedByAge = users.toSorted((a, b) => a.age - b.age);
console.log(sortedByAge);
// [
//   { name: "鈴木", age: 18 },
//   { name: "田中", age: 24 },
//   { name: "佐藤", age: 36 }
// ]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBArhApgJwjAvDA2gKBjAbxjAEMBbRALhgCJAGV0Fo5GgGhhIHMqYAmAFhgC+zPIWLkuNQCxJgCnMWbTtQCMADkHD8RUhWo1ACvKAT0LkcuAZgBsanAF0A3DhyhIsCCGRREAEwBCATwCCnBjwSKgAdFAgAMqu7h4AFHEkrABGAJQYAHxsocYwALQwyTmcqXaOLgA2iKEVIOxxLm6evgGIpTgA9B3Ynd0aYtq0MkYKMCqWXfiiWhKMI1x8E33T4joG89Tmgr0wVkA
