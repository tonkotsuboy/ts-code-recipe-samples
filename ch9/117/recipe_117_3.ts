// このファイルは構造的には正しいTypeScriptです。
// 書籍では「nameをnumber型にしてもエラーにならず、想定する構造を崩してしまう」例として、
// as constの型チェック不足を説明しています。
const user = {
  name: 123,
  age: 24,
} as const;
