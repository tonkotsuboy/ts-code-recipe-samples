const user = {
  name: "鈴木",
  age: 24,
} as const satisfies {
  name: string;
  age: number;
};

user.name;
// ^? "鈴木"

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBArhApgJxgXhgbwFAxmAQwFtEAuGAIkBYkwCnMKAaXGAgczJgCYAWRgX2YgxQkWBAJQAlhABmExIJx5CJctGQSwLANxNW7MHCIAjFDt47sCFADpliHQHoHMAHoB+SrQpA
