// 書籍では declare 部分が recipe_134_2 側にあるが、単体で型チェックできるよう同ファイルに同梱。
// このサンプルは「NoInfer なしだと states に含まれない値を渡しても型エラーにならない」ことを示すデモ。
declare function checkDoor<T extends string>(states: T[], initial: T): T;

checkDoor(["open", "close"], "locked"); // エラーにならない
