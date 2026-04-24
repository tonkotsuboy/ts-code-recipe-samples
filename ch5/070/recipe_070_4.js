const userList = [
  { id: 1, name: "田中", role: "admin" },
  { id: 2, name: "鈴木", role: "user" },
  { id: 3, name: "佐藤", role: "user" },
  { id: 4, name: "高橋", role: "user" },
  { id: 5, name: "伊藤", role: "admin" },
];

// インデックス1から3つの要素を削除
const trimmedUsers = userList.toSpliced(1, 3);

console.log(trimmedUsers);
// [
//   { id: 1, name: "田中", role: "admin" },
//   { id: 5, name: "伊藤", role: "admin" }
// ]
