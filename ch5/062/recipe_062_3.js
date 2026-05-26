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
