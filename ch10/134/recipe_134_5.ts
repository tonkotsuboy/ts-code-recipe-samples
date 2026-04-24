// 意図的な型エラーデモ: NoInfer により states に無い "locked" を指定すると TS2345。
// 書籍では declare 部分が recipe_134_4 側にあるが、単体で型チェックできるよう同ファイルに同梱。
declare function checkDoor<T extends string>(
  states: T[],
  initial: NoInfer<T>,
): T;

checkDoor(["open", "close"], "locked"); // エラー
