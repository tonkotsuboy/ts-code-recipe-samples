function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// 書籍では関数定義のみだが、動作確認のため呼び出し例を追加している
for (const n of numberGenerator()) {
  console.log(n);
}
// 1
// 2
// 3
