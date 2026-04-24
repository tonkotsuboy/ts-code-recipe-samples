const users = [
  { name: "田中", age: 24 },
  { name: "鈴木", age: 18 },
  { name: "佐藤", age: 36 },
];

const sortedByAge = users.toSorted((a, b) => a.age - b.age);
console.log(sortedByAge);
// [
//   { name: "鈴木", age: 18 },
//   { name: "田中", age: 24 },
//   { name: "佐藤", age: 36 }
// ]
