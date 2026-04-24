type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

type UserNameAndEmail = Pick<User, "name" | "email">;

const user: UserNameAndEmail = {
  name: "田中 太郎",
  email: "tanaka@example.com",
};

console.log(user);
