function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

type SumParameters = Parameters<typeof sum>;
// number[] 型が抽出される（rest parametersの場合は配列のタプル形式で推論される）

const args: SumParameters = [1, 2, 3];
console.log(sum(...args));
