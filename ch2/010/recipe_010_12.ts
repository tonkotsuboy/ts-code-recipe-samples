const numbers = [1, 2, 3];
numbers.push(4); // 配列の要素を追加（OK）
numbers[0] = 10; // 最初の要素を変更（OK）
console.log(numbers); // [10, 2, 3, 4]

const user = { name: "田中", age: 25 };
user.name = "佐藤"; // プロパティを変更（OK）
user.age = 30; // プロパティを変更（OK）
console.log(user); // { name: "佐藤", age: 30 }
