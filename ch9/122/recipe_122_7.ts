function add(a: number, b: number): number {
  return a + b;
}

// add関数の型を抽出
type AddFunctionType = typeof add;
// AddFunctionType: (a: number, b: number) => number

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABAQwCaoBTIFyLCAWwCMBTAJwBpEjd9jyBKWw0sxAbwChFEySoQZJMkQBqagG5OAX06cA9PJTpARamAHU0B2DIGj1QEkMgXqNAX4qcoATwAOJRAEF0AMXDR4YACrnLAXkSmLcYMtRSitZ2DrAIrha4WMz0lNQxrAyI7gB8eCzkQA
