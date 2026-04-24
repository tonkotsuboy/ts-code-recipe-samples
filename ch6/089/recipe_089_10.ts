// AsyncGenerator<yield型, return型, next型>
async function* typedAsyncGenerator(): AsyncGenerator<
  string,
  void,
  unknown
> {
  yield await Promise.resolve("文字列1");
  yield await Promise.resolve("文字列2");
}

// 書籍では関数定義のみだが、動作確認のため呼び出し例を追加している
async function main() {
  for await (const v of typedAsyncGenerator()) {
    console.log(v);
  }
}
main();
// 文字列1
// 文字列2
