// 書籍: 意図的に型エラーを起こすデモ（main.ts コンパイルエラー版）。
// 単体実行のため add の定義を同ファイルに含めています。
function add(a: number, b: number): number {
  return a + b;
}

// @ts-expect-error ts(2345) number 型の引数に string を渡すとエラーになることを示すデモ
const result = add(10, "2");
// コンパイルエラー
console.log(result);
