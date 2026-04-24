const viewers = [
  { name: "田中", age: 25 },
  { name: "鈴木", age: 17 },
  { name: "後藤", age: 30 },
];
const allAbove18 = viewers.every((viewer) => viewer.age >= 18);
console.log(allAbove18); // false
