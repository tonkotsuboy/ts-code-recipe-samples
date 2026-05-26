type PartialUser = {
  id?: number;
  name?: string;
  email: string;
};

type RequiredUser = Required<PartialUser>;

// idを省略しているのでエラー
const invalidUser: RequiredUser = {
  name: "鈴木",
  email: "suzuki@example.com",
};

console.log(invalidUser);
