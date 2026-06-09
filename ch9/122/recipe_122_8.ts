function add(a: number, b: number): number {
  return a + b;
}

type AddFunctionType = typeof add;

// 同じ関数型を持つ関数を定義
const multiply: AddFunctionType = (a, b) => a * b;

console.log(multiply(3, 4)); // 12

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABAQwCaoBTIFyLCAWwCMBTAJwBpEjd9jyBKWw0sxAbwChFEySoQZJMkQBqagG5OAX06coATwAOJRAEF0AMXDR4YACrLVAXkSKVcYCnRTOAejuJAMCqANBkBFqYAdTQNHqgJIZAgMaAJgyePoBZ2oCV-pwQCADOUIgEIAA2sEqJCrgaqNqQsAiGKoimWFREDIUAfCiIAFSSclFg0XCJJAB0iXAA5hgJyTCpChgAzFQALAwMEogOiACMAExAA
