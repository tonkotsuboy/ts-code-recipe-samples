type User = {
  name: string;
  age: number;
};

// エラー
const invalidUser: User = {
  name: "鈴木",
};

console.log(invalidUser);
