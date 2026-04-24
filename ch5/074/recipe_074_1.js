const user = {
  name: "田中",
  age: 30,
  city: "東京",
};

// キーを取得
const keys = Object.keys(user);
console.log(keys); // ["name", "age", "city"]

// 値を取得
const values = Object.values(user);
console.log(values); // ["田中", 30, "東京"]

// キーと値のペアを取得
const entries = Object.entries(user);
console.log(entries);
// [["name", "田中"], ["age", 30], ["city", "東京"]]
