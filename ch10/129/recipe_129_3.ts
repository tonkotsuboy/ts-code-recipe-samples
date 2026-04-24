type PartialUser = {
  id?: number;
  name?: string;
  email: string;
};

type RequiredUser = Required<PartialUser>;

const user: RequiredUser = {
  id: 1,
  name: "鈴木",
  email: "suzuki@example.com",
};

console.log(user);
