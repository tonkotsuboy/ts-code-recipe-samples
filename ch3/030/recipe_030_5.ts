// 意図的な型エラーデモ（TS2322）。userCには"佐藤"を代入できない
type UserName = "鈴木" | "田中";
const userA: UserName = "鈴木"; // 有効
const userB: UserName = "田中"; // 有効
const userC: UserName = "佐藤"; // エラー
