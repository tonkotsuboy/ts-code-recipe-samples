// 意図的な型エラーデモ（TS2322）。string & number は never型になり、どんな値も代入不可
type StringAndNumber = string & number; // never型になる

// これらの型には値を代入できない
const value: StringAndNumber = "hello";
// エラー: string型はnever型に代入できません
