const users = [
  { name: "鈴木", age: 18 },
  { name: "田中", age: 24 },
  { name: "後藤", age: 36 },
];

const result = users.map((user) => user.name);

console.log(result);
// ["鈴木", "田中", "後藤"]
