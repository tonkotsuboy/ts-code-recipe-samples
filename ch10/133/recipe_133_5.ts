function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

type SumParameters = Parameters<typeof sum>;
// number[] 型が抽出される（rest parametersの場合は配列のタプル形式で推論される）

const args: SumParameters = [1, 2, 3];
console.log(sum(...args));

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAZxAWwBQDodnQIwFMAnZALkTzSOIG0BdASgqpsQG8AoRRYwqEMSSsSyLHwAmICIQwYocKAEMANgBpK6RogC8APkQLlKxAGpNaDQAZGAbk4BfTpygBPAA6FEAZXQAFJWIlNH5RXUQAoJCoUQAeN084YBR0PXsAenSLGgZEQGj1QBkGQF6jQC-FQFUGQBiGQGiGQAh-vmQoRHdA4NDSQDsGQBYNQAgVQHsGQFlEwHQldsB+hkB1hkBrhkAjfUB4fUBzBkAK40A1qMqqwEh-5wgEBsRAgHNyH38W6LCdRFoARg0AJg0AZnp7LbBkOBVCLBU4PYxUTBwWH2yEYdiAA
