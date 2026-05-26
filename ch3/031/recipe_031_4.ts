type StringAndNumber = string & number; // never型になる

// これらの型には値を代入できない
const value: StringAndNumber = "hello";
// エラー: string型はnever型に代入できません
