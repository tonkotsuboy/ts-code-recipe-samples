const { promise, resolve, reject } = Promise.withResolvers<string>();
setTimeout(() => {
  resolve("成功しました");
}, 1000);

// 参照のみ（未使用警告回避）
void promise;
void reject;

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBA3jADgJxAWwJYQKYBobLYQgA2AbngdgFbbCwC+MAvDAAqqY4B0A7hlAAWAJSKkKyCAB5oyDGADmAPgAUASgDcAKBxQAKhjTYQAVygr1LJfC0wqxcthUAiQAhGgfKVA6gyA-Bk+B9BmdNLQZ8AEYABkigrQB6GJhAIeVAc0dAOwZAfwZACH-AKnNAf3lACldAM2jAKRVAPbVAfwTASH+tMhAMABMkTixsbRr6qlp6DSA
