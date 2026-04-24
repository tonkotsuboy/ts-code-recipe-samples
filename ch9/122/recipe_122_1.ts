const user = {
  age: 18,
  name: "田中",
};

// userオブジェクトの型を抽出
type UserType = typeof user;
// UserType: { age: number; name: string; }
