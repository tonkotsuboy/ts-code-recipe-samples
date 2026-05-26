type User = {
  name: string;
  age: number;
};

type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  name: "田中",
  age: 24,
};

user.name = "鈴木"; // エラー
