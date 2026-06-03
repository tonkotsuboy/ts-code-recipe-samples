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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAqgzhATlAvFA3gKClAlgEwC4oA7AVwFsAjJAbm1IEMKJi5hFcSBzenCCo1wAbNhy68Gjbq1KUaiegF96mUJFgJEAOWYQAgiXwBRQSNRQACrgDGAawA88JABooAIhJ73UAD4eBIWF3AD5VGwB7EnYoMi1iZx09QxMzYQssHC8WYndABldAWjkoQCpNQDmE9xcGQJFc4EYvO0YAAQgAD2YwYQgAOkiKCswVTExI6Iiu7uEI7gAKOKQASlogA
