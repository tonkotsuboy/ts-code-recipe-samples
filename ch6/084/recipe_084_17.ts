// エラー: ?と=は同時に使用できない
// function greet(name?: string = "ゲスト") {
//   console.log(`こんにちは、${name}さん`);
// }

// 正しい書き方: 初期値を指定すれば自動的に省略可能になる
function greet(name: string = "ゲスト") {
  console.log(`こんにちは、${name}さん`);
}

// 書籍では関数定義のみだが、動作確認のため呼び出し例を追加している
greet(); // こんにちは、ゲストさん
