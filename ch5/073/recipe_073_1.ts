type User = {
  name: string;
  age: number;
  address?: string;
};

const user1: User = {
  name: "田中",
  age: 24,
  address: "東京都",
};

const user2: User = {
  name: "田中",
  age: 24,
};

console.log(user1, user2);
