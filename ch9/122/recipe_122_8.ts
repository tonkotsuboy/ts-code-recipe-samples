function add(a: number, b: number): number {
  return a + b;
}

type AddFunctionType = typeof add;

// 同じ関数型を持つ関数を定義
const multiply: AddFunctionType = (a, b) => a * b;

console.log(multiply(3, 4)); // 12
