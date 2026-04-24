// 注: 書籍と同じく user を前のスニペットから引き継ぐ想定。単体で動かすため
//     冒頭で user 変数を定義しています。
type User = {
  name: string;
  details?: { age: number };
};
const user: User = { name: "鈴木", details: { age: 25 } };

// ?.を使わない場合
const age = user && user.details && user.details.age;
console.log(age);
