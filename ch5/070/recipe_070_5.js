const userList = [
  { id: 1, name: "田中", role: "admin" },
  { id: 2, name: "鈴木", role: "user" },
  { id: 3, name: "佐藤", role: "user" },
  { id: 4, name: "高橋", role: "user" },
  { id: 5, name: "伊藤", role: "admin" },
];

// 条件による削除ならfilterの方が簡潔
const removedUsers = userList.filter((user) => user.role !== "user");
console.log(removedUsers);
