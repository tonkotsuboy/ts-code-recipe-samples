type User = {
  name: string;
  age: number;
  address?: string;
};

const user3: User = {
  name: "佐藤",
  age: 30,
};

// 文字列ではないのでエラー
user3.address = 124;
