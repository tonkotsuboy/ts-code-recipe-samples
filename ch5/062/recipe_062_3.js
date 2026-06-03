const apiResponse = [
  { id: 1, first_name: "太郎", last_name: "山田", age: 25 },
  { id: 2, first_name: "花子", last_name: "鈴木", age: 30 },
];

const displayUsers = apiResponse.map((user) => ({
  id: user.id,
  fullName: `${user.last_name} ${user.first_name}`,
  age: `${user.age}歳`,
}));

console.log(displayUsers);
// [
//   { id: 1, fullName: "山田 太郎", age: "25歳" },
//   { id: 2, fullName: "鈴木 花子", age: "30歳" }
// ]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBAhgBwJYCUCmEHgmmBeGAbQCgYYBvGJAEwC4YBGAGhgDMkAnaAfTDgFs09AESAqTUBzCcJYAbODz6CRgRx1ADK5T4AcyEwATAFYYAXyakKVOrpbsuUXgO3DAjUGAFbXWz59kYBYkwBTm6uFr0AMwADEYmALoA3MTEoJCw1EiYsgCeAKo4XPjwyOiY2GgAdPyIABRlAK5ZAJT4AHwwZeSmNPTVaBxFNCZkrJXS0gBynjAABgAk5B1d7rYKaIYwUzNF1h6ChmO9mtqT01lFAYuAztbbxIY1NTFx2CDSxdIgGmVJKXAZWRDXxAD0v0Q-gCyJQ2owrANhqNhKoYBJ-IEYMJ9CdhOEgWQzGCdBDBiNFEjfDAXAiHKFUUYMREgA
