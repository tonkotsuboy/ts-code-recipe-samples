const users = ["鈴木", "田中", "佐藤"];
console.log(users.findIndex((name) => name === "田中")); // 1
console.log(users.findIndex((name) => name === "マリオ")); // -1
