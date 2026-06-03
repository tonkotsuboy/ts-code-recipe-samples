const user = {
  name: "鈴木",
  age: 24,
} satisfies {
  name: string;
  age: number;
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBArhApgJxgXhgbwFAxmAQwFtEAuGAIkBYkwCnMKAaXGAgczJgCYAWRgXxggEoASwgAzYYghYmhEuWjJhYFgG4mrdmDhEARinW9VQA
