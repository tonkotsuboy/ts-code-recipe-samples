type User = {
  name: string;
  age: number;
};

type OptionalUser = Partial<User>;

const user1: OptionalUser = {
  name: "鈴木",
};

const user2: OptionalUser = {
  age: 20,
};

const user3: OptionalUser = {
  name: "鈴木",
  age: 20,
};

const user4: OptionalUser = {};

console.log(user1, user2, user3, user4);
