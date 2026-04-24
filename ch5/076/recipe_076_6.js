// 書籍では「関数を含むオブジェクトを structuredClone すると DataCloneError になる」ことを
// 示すサンプル。実行するとランタイムエラーで停止するので、配布コードでは try/catch で囲んで
// 読者がエラー内容を確認できるようにしています。
const objectWithFunction = {
  name: "test",
  func: () => console.log("hello"),
};

// 関数を含むオブジェクトをコピーしようとするとDataCloneErrorエラー
try {
  structuredClone(objectWithFunction);
} catch (error) {
  console.log(error instanceof Error ? `${error.name}: ${error.message}` : error);
  // DataCloneError: ...
}
