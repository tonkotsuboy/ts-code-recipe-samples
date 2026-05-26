type User = {
  name: string;
};

// エラー: 同じ名前の型を複数回宣言するとエラーになる
type User = {
  age: number;
};
