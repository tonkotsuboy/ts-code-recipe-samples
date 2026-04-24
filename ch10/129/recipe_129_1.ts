// 意図的に型エラーを発生させるデモ（TS2741: Property 'age' is missing）。
type User = {
  name: string;
  age: number;
};

// エラー
const invalidUser: User = {
  name: "鈴木",
};

console.log(invalidUser);
