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
