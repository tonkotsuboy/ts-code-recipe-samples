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
