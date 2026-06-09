class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

const error = new ValidationError("バリデーションエラー");

console.log(error instanceof ValidationError); // true
console.log(error instanceof Error); // true

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAEBqYgJYBMwBdEHsB2BRATvpvtAKYAeap2yMBRJA3gFDTTA4Rr4CuwaxABQBbUlDABzUgC5oXfImwSAlNBZs2EHgAdS+EWIiTSygNysNaABaIIAOmxhR0ALzQARPCSoMOesXdzNgBfZlDmDmwuMkJiV2hsUgB3OAQUdCw8WP13QAWGQCuGQHGGQB+GQHaGQHOGQGeGQAqGQEuGYvczZgjOTBBSOxBMCUE9BmhFLjBsYFJMADNU7wy-bLNoAHoF6G4eUhaoto6unr64wbRh0Ynof3x5pZXeUiA
