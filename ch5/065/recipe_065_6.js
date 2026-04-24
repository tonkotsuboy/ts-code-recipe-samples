const users = [
  { name: "鈴木", age: 12 },
  { name: "田中", age: 20 },
  { name: "佐藤", age: 20 },
];
const filteredUsers = users.filter((user) => user.age >= 20);
console.log(filteredUsers);
// [{ name: "田中", age: 20 }, { name: "佐藤", age: 20 }]
