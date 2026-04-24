type User = {
  id: number;
  name: string;
  age: number;
};

// すべてのプロパティをstring型に変換
type UserAsStrings = {
  [K in keyof User]: string;
};
// { id: string; name: string; age: string; }

const userForm: UserAsStrings = {
  id: "1",
  name: "鈴木",
  age: "30",
};
