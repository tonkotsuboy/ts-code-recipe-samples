// 書籍では前のセクションで定義していた add 関数と呼び出しを、単体実行用に同梱
function add(a, b) {
  return a + b;
}

const result = add(24, "後藤");

console.log(result); // "24後藤"
