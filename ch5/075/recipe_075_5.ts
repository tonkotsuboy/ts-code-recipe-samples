// 配列の結合
const fruits = ["りんご", "バナナ"];
const vegetables = ["にんじん", "キャベツ"];
const foods = [...fruits, ...vegetables];
console.log(foods); // ["りんご", "バナナ", "にんじん", "キャベツ"]

// オブジェクトの結合
const userInfo = { name: "田中", age: 30 };
const contactInfo = { email: "tanaka@example.com" };
const user = { ...userInfo, ...contactInfo };
console.log(user);
// {name: "田中", age: 30, email: "tanaka@example.com"}
