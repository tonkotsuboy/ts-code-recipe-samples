// 注: 書籍では recipe_022_4.ts で定義された logCount 関数の呼び出しのみを掲載。
//     単体で動くよう、このファイル内に関数定義を同梱しています。
function logCount(count: number | null | undefined): void {
  console.log(count ?? -1);
}

logCount(null); // -1
logCount(undefined); // -1
