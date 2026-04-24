// 意図的な型エラーデモ: logPointの呼び出しでタプル型の要素型・要素数が合わずエラー (期待エラー: TS2322, TS2345)
function logPoint([x, y]: [number, number]): void {
  console.log(`(${x}, ${y})`);
}
logPoint([100, 200]); // (100, 200)
logPoint(["鈴木", "田中"]); // エラー
logPoint([1, 2, 3]); // エラー
