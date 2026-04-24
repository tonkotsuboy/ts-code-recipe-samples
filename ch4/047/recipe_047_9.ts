// 書籍: bigint と number を混在させるとコンパイルエラー（TS2365）になる意図的なデモ。
// @ts-expect-error ts(2365)
const result = 2n + 1; // エラー
console.log(result);
