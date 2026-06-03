function identity<T>(arg: T): T {
  return arg;
}

const output1 = identity<string>("myString");
const output2 = identity<number>(123);

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABDAJgUzLKBPAPAFQD4AKAQwCcBzALkXwEpb9EBvAKEUXLShHKQqUA3GwC+bNhAQBnKIjggoAB0UBGRAF5k6TDBy5Z5GGEokARAFtsAZShGTZ+iKlhZ8xSqgAmTdoxY8MBALACM0chJVLwBmJyA
