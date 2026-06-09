const user = {
  name: "鈴木",
  age: "24", // × Type 'string' is not assignable to type 'number'
} satisfies {
  name: string;
  age: number;
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBArhApgJxgXhgbwFAxmAQwFtEAuGAIkBYkwCnMKAaXGAgczMoCYAWBmAej4wA6zAAqATwAOiGAHJoyAJZgWsmIoj4QsAhAiKWhAEYAbGVBAwoUmbLBwiRlLOwBfGBAJQNAM0WJNHDxCEnIFZRYAbiZWdntHFGjXSKA
