function getValue<T>(value: T): T {
  return value;
}

const result = getValue({ name: "鈴木" });
// resultの型: { name: string }

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABAcwKZQGoEMA2JUA8AKgHwAUAbrvgFyJECUdRiA3gFCKIBO6I3SKnlQBudgF927CAgDOUHqlkgcCgLwp02YWVaIwWALao6AIkAsSYApzU4nEMxAegeLlqwHYMgaPU6eg8brzuGDBkWyA
