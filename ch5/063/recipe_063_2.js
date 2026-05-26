const users = [
  { name: "鈴木", age: 18 },
  { name: "田中", age: 24 },
  { name: "後藤", age: 36 },
];

const adults = users.filter((user) => user.age >= 20);

console.log(adults);
// [{ name: "田中", age: 24 }, { name: "後藤", age: 36 }]
