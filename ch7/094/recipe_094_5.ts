type RowData = [string, ...number[]];
const row1: RowData = [1, 2, 3]; // 1番目の要素がnumber型なのでエラー
const row2: RowData = ["鈴木", "田中", 3];
// 2番目の要素がstring型なのでエラー

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBASg9gdwCIENgqgXigbQM7ABOAlgHYDmANFAHR2kCuAtgEYSE4C6nA3AFABjOKQJRCiAIwAuWIlTosuCdQBM1AMy8oAem1QJgK1dAd26A7BkCBkYAJfQDIMjVu0DR6oCsGE4HMGQBUMgS4ZAPwyDho8QgqMvDIaBjYOABEgCxJgBTmkdSRgAyugLRyCVCa-LpQKsbm1gQkFE6unl5AA
