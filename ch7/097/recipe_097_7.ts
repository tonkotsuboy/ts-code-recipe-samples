// 意図的な型エラーデモ: Readonlyの効果は直接のプロパティにのみ及ぶことを示す。profileへの再代入はエラー、ネストされたageの書き換えはOK (期待エラー: TS2540)
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
