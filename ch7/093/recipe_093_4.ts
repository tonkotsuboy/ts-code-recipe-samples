// 意図的な型エラーデモ: void型の関数が値を返そうとするとコンパイルエラーになることを示す (期待エラー: TS2322)
function logSum(a: number, b: number): void {
  return a + b;
  // コンパイルエラー: Type 'number' is not assignable to type 'void'.
}
