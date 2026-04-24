const users = ["鈴木", "田中", "佐藤"];
console.log(users.findIndex((user) => user === "田中") !== -1);
// true
console.log(users.includes("田中"));
// true（includesの方がシンプル）
