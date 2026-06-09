function getValue<T>(value: T): T {
  return value;
}

const result = getValue({ name: "鈴木" } as const);
// resultの型: { readonly name: "鈴木" }

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABAcwKZQGoEMA2JUA8AKgHwAUAbrvgFyJECUdRiA3gFCKIBO6I3SKnlQBudgF927CAgDOUHqlkgcCgLwp02YWVaIwWALao6AIkAsSYApzU4nGIssxDLDyGYgPTvFy1YDsGQNHqdHq8WAAmCDgAnvpGJogW1rZAA
