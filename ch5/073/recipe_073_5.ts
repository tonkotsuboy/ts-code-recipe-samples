// 書籍では recipe_073_1 の user2 を参照しているため、User 型と user2 の定義を同梱しています。
type User = {
  name: string;
  age: number;
  address?: string;
};

const user2: User = {
  name: "田中",
  age: 24,
};

// addressが存在する場合のみ、toUpperCase()を実行
const upperAddress = user2.address?.toUpperCase();
console.log(upperAddress); // undefined
