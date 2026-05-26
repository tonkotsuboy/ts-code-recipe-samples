type User = {
  name: string;
  profile: {
    age: number;
  };
};
type ReadonlyUser = Readonly<User>;
const user: ReadonlyUser = {
  name: "田中",
  profile: { age: 24 },
};
user.profile = { age: 30 }; // エラー: profileプロパティは読み取り専用
user.profile.age = 30; // OK: ネストされたプロパティは書き換え可能
