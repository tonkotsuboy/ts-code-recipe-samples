// 書籍では「JSON.stringify は循環参照を含むオブジェクトを扱えない」ことを示すサンプル。
// 実行するとランタイムエラーで停止するので、配布コードでは try/catch で囲んで
// 読者がエラー内容を確認できるようにしています。
const original = { name: "MDN" };
original.itself = original; // 循環参照

// エラー
try {
  const clone = JSON.parse(JSON.stringify(original));
  console.log(clone);
} catch (error) {
  console.log(error instanceof Error ? `${error.name}: ${error.message}` : error);
  // TypeError: Converting circular structure to JSON ...
}
