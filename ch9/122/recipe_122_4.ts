const numberArray = [1, 2, 3, 4, 5];

// numberArrayから要素の型を抽出
type ElementType = (typeof numberArray)[number];

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBGCuBbARgUwE4EF3oIYE8YBeGAbQEYAaGAJmoGZqAWagVgF0BuAKG4Ho+cJGiw4CgaQZAkQyBAyMAEvoDsGQNHqgJIZAvUaAvxW5R8AB1QwAogBtUiVGCgAVXfpIAKbXpAAzISgzY8+AJSkE79C4gA
