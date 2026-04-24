// 書籍では declare 部分が recipe_134_2 側にあるが、単体で型チェックできるよう同ファイルに同梱。
declare function checkDoor<T extends string>(states: T[], initial: T): T;

const result = checkDoor(["open", "close"], "open"); // OK
console.log(result);
