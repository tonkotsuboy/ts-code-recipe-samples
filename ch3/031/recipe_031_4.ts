type StringAndNumber = string & number; // never型になる

// これらの型には値を代入できない
const value: StringAndNumber = "hello";
// エラー: string型はnever型に代入できません

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAysBOBLAdgcwILICYDkCuAtgEYTxQC8UAzgiqlAGRTKEnwDcUA9F8xAG6lA0eqBrBkBWDIGiGAFBSeUQMoMgGIZAkQyA7BlGB7BkAkCoCSGQMdygU0VA5gyBZBjGARBikBjAPbIaUfgEMANnggAuWLTSZcrUgooACIACwgXFxtg9lleQAqGQEuGQB+GLxokNCENZAFhEUNTQD8GQG0GQGSGIA
