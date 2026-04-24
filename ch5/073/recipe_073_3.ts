// 書籍では recipe_073_2 の user3 を引き続き使っているため、User 型と user3 の
// 定義を同梱しています。
// 意図的な型エラーのデモ: address は string | undefined なので数値代入で TS2322 が発生する
type User = {
  name: string;
  age: number;
  address?: string;
};

const user3: User = {
  name: "佐藤",
  age: 30,
};

// 文字列ではないのでエラー
user3.address = 124;
