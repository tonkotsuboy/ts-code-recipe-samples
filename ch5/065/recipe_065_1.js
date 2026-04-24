const users = ["鈴木", "田中", "佐藤"];
console.log(users.find((name) => name === "田中")); // 田中
console.log(users.find((name) => name === "マリオ")); // undefined
