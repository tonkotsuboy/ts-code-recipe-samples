type IsArrayStrict<T> = [T] extends [any[]] ? true : false;

type Y = IsArrayStrict<string | number[]>; // false

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAkgzgQQE5IIYgMrCQSwMbAA8AKgHxQC8UA2sQLpQQAewEAdgCZw2psjV0GAfijYArtABcUAGaoANnAgBuAFCrQkKAE1KsRCnRZcBQnGw42AcygAfKGzEBbAEYQkA0sqgB6H7IUlIA
