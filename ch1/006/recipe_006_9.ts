// 書籍では recipe_006_8.ts 側で定義していた add 関数を、単体実行用に同梱
function add(a: number, b: number) {
  return a + b;
}

// プログラムを実行するときに
const result = add(24, "後藤"); // エラー: string型はnumber型に代入できません
console.log(result);
