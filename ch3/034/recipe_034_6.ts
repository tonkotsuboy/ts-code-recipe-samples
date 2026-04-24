// 意図的な型エラーデモ（TS2300）。type は同じ名前で複数回宣言できない
type User = {
  name: string;
};

// エラー: 同じ名前の型を複数回宣言するとエラーになる
type User = {
  age: number;
};
