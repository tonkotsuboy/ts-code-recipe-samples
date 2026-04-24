// 意図的な型エラーデモ: 可変長タプル型で1番目がstring型・2番目以降がnumber型であることに違反 (期待エラー: TS2322)
// 書籍では recipe_094_4.ts で定義されたRowData型をそのまま使うが、単体実行用にこのファイル内で再定義する
type RowData = [string, ...number[]];
const row1: RowData = [1, 2, 3]; // 1番目の要素がnumber型なのでエラー
const row2: RowData = ["鈴木", "田中", 3];
// 2番目の要素がstring型なのでエラー
