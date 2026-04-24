function add(a: number, b: number): number {
  return a + b;
}

// add関数の型を抽出
type AddFunctionType = typeof add;
// AddFunctionType: (a: number, b: number) => number
