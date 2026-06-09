const userList = [
  { id: 1, name: "田中", role: "admin" },
  { id: 2, name: "鈴木", role: "user" },
  { id: 3, name: "佐藤", role: "user" },
  { id: 4, name: "高橋", role: "admin" },
];

// ID:2とID:3のユーザーを新しいユーザーに置き換える
const targetIndex = userList.findIndex((user) => user.id === 2);
const updatedUsers = userList.toSpliced(
  targetIndex,
  2,
  { id: 5, name: "伊藤", role: "moderator" },
  { id: 6, name: "渡辺", role: "moderator" },
);

console.log(updatedUsers);
// [
//   { id: 1, name: "田中", role: "admin" },
//   { id: 5, name: "伊藤", role: "moderator" },
//   { id: 6, name: "渡辺", role: "moderator" },
//   { id: 4, name: "高橋", role: "admin" }
// ]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBArhApgJwDIEtowLwwNoBQMMA3jOgCYBcMAjADQxgCGAtojQESAMroLRynjZCAA2HGJ2YVW6MJxgBfekVLlqMAEyMW7LoBYkwBTmAmENFcEKOYuVlKNAMxa2YzoAV5QCehRk8-PJLS4jZqACyOOuKAG1mA0laeIs6S0rIKSgC6ANwEBAD0mTAAkgAiVOqAFgwFVHaAdgyAZwyAPwyAbQw1gEkMgA2mgOoMgCIMtQ2A1gyAdv6AsgyA28aAEgyA0QwEoJCwUMzIAOaIULlgFIgAHjjwSGiYUAB0AGYyFMurawAU5z4AlDgAfFsoe5Q42Ljq1+mTWHAADhTMKCICgAVW2EE2Pgw0D2UBAAGVfsJ0MBgedlDN5otTut-Bo8YEaABWULOQBQ8h5BLEuKwQKtkICQL4ktZVDQAGykriAQjtAF3xMVM4lp9MZzKsnwy31ie2EIDmV3+gOBYJQEAl2XwWRyATZdC54j4AriUhkfi1xBUthgJKYTi4FKNNLpKFFZo1OqtnNtYU4fMdQudDLhYqU7stwX1nCi-okJsS8nNySAA
