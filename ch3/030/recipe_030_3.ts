// 意図的な型エラーデモ（TS2322）。userBには"佐藤"を代入できない
type UserName = "鈴木";
const userA: UserName = "鈴木"; // 有効
const userB: UserName = "佐藤"; // エラー
