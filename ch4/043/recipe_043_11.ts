function add(a: number, b: number): number {
  return a + b;
}

// @ts-expect-error ts(2345) number 型の引数に string を渡すとエラーになることを示すデモ
const result = add(10, "2");
// コンパイルエラー
console.log(result);
