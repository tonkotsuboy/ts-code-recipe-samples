// エラー: ?と=は同時に使用できない
// function greet(name?: string = "ゲスト") {
//   console.log(`こんにちは、${name}さん`);
// }

// 正しい書き方: 初期値を指定すれば自動的に省略可能になる
function greet(name: string = "ゲスト") {
  console.log(`こんにちは、${name}さん`);
}

greet(); // こんにちは、ゲストさん

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/PTAEgqGRLhkH4YC5QPyAsGAvIewZAwKoITNDWDIf3lAKV0HMGQWQZArBkBEGAKBFADMBXAOwGMAXASwHsnQBzAE4BTIWwAUTAIYBbIQngBnNgI5M+oFKABEgJoZAnQyAJhi0BKUAG8aYUKBY8FXADZCAdA658xAA0DKDIGSGHICGDGiAgAwAJGZSsgC+gKoMvp7GANyWoFFUKYDG1oDqDBSAH2YkgJ2m8IC4SoD45oAkCoBJDIDgxoBZ2oCaDIAxDIAODIBXgYCrSoAhbjiAgO6Apq6A98qAvwE4ZIDRDFSMrJw8-MKiEjJCisqq6pq6hibmVNa2TPZOru5efoEh4ZFCsfFJVGlUgiLiSaC0Z0HB+gZxQA
