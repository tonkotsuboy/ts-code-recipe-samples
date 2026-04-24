// 書籍では recipe_073_1 で定義した User 型を使用しているため、
// このファイル単体で動くように User 型の定義を同梱しています。
type User = {
  name: string;
  age: number;
  address?: string;
};

const user3: User = {
  name: "佐藤",
  age: 30,
};

user3.address = "北海道";
console.log(user3);
