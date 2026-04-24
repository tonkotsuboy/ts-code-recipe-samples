// 注: ブロックスコープ外から a を参照するコンパイルエラー
//     （TS2304: Cannot find name 'a'）を示すサンプル。
{
  const a = "鈴木";
}
console.log(a); // エラー
