const user = {
  name: "鈴木",
  age: 24,
} as const satisfies {
  name: string;
  age: number;
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBArhApgJxgXhgbwFAxmAQwFtEAuGAIkBYkwCnMKAaXGAgczJgCYAWRgX2YgxQkWBAJQAlhABmExIJx5CJctGQSwLANxNW7MHCIAjFDt5agA
