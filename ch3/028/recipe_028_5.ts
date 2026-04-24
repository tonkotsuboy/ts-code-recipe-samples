// ユーザー情報の型
type User = {
  id: number;
  name: string;
  age: number;
  address: {
    city: string;
  };
};

const myUser: User = {
  id: 1,
  name: "太郎",
  age: 20,
  address: {
    city: "東京",
  },
};

// ユーザー情報を更新する関数
const updateUser = (user: User): void => {};
