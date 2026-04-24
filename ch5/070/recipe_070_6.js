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
