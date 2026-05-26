type User = {
  readonly name: string;
};

const user: User = {
  name: "田中",
};

console.log(user.name); // 読み取りはできる
user.name = "鈴木"; // エラー: 書き換え不可
