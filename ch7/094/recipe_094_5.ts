type RowData = [string, ...number[]];
const row1: RowData = [1, 2, 3]; // 1番目の要素がnumber型なのでエラー
const row2: RowData = ["鈴木", "田中", 3];
// 2番目の要素がstring型なのでエラー
