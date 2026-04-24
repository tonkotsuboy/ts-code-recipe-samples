// 注: 同一ブロックスコープでの再宣言エラー
//     （TS2451: Cannot redeclare block-scoped variable 'a'）を示すサンプル。
{
  let a = "Hello, World!";
  let a = "Hello, TypeScript!"; // エラー
}
