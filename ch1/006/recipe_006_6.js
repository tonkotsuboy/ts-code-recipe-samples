// 書籍では recipe_006_5.js 側で定義していた add 関数を、単体実行用に同梱
function add(a, b) {
  return a + b;
}

// プログラムを実行するときに
const result = add(24, "後藤");
console.log(result); // "24後藤"
