const users = [
  { id: 1, name: "鈴木", age: 20 },
  { id: 2, name: "田中", age: 25 },
  { id: 3, name: "後藤", age: 30 },
];

const newUsers = users.with(1, { id: 4, name: "加藤", age: 35 });

console.log(newUsers);
// [
//   { id: 1, name: "鈴木", age: 20 },
//   { id: 4, name: "加藤", age: 35 },
//   { id: 3, name: "後藤", age: 30 }
// ]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBArhApgJwjAvDA2gKBjAbxgEsATALhgEYAaGMAQwFtFKAiQFiTAKczboYHNWMAEwAGGAF8aeQiQoi6jFu0AMroFo5XjAFDhAVknT8RMpQDMi5kLaAY-UAnoZu1nxUnAF0A3DhyhIsMIgB3AFUkVAx4UIgAOgDiKAALAApaWRMYABYLZRg2QAKlez5BM30JAEpPb3AIEAAbRCiakH5E-2DI8pwAek7sLp6jOUoUpStuByKRZ2lu-FT5TPpLdnzxoVMS6f65syyrO1WnST6YVyA
