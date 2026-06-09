function getValue(id: number): string | null {
  if (id < 0) {
    return null;
  }
  return `ID: ${id}の値`;
}

console.log(getValue(1)); // ID: 1の値
console.log(getValue(-1)); // null

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABAcwKZQGoEMA2JUAUMAJgFyJggC2ARqgE4CU5AzlPTGMogD4Ug4ciAN4AoRIhjBERYogA8iAAyMR4iYnroQ9JJUEBudQF91WqDqQADAJIARcgBJhJY4DsGQCQKVo6dEQELHA4qAB0OHDIBGiYuPgEAIyMjAaIAPSpiPbk8Z5+AUGh4ZHR2HiEALSJyWkZ+jhAA
