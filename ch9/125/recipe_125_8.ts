type IsArrayStrict<T> = [T] extends [any[]] ? true : false;

type Z = IsArrayStrict<number[]>; // true

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAkgzgQQE5IIYgMrCQSwMbAA8AKgHxQC8UA2sQLpQQAewEAdgCZw2psjV0GAfijYArtABcUAGaoANnAgBuAFCrQkKAC1KsRCnRZcBQmzEBbAEYQkA0sqgB6J6KQSgA
