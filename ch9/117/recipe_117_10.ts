const user = {
  name: 123, // × Type 'number' is not assignable to type 'string'
  age: 24,
} as const satisfies {
  name: string;
  age: number;
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBArhApgJxgXhgbwFAxmAQwFtEAuGARgCYBmAGhgHpGYB1mAFQE8AHRGAORg4RAEYoBMAJYR8IWAQgQpAc0KiANvyggYUXvwHRkUsCoG4YBFWRhUALHWwBfK7NCRYEAlBkAzKURZHDxCEnJjUxUAbktrW2ExFFjnaKA
