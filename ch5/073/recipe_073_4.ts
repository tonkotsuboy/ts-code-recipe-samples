type User = {
  name: string;
  age: number;
  address?: string;
};

const user2: User = {
  name: "田中",
  age: 24,
};

console.log(user2.address); // undefined
