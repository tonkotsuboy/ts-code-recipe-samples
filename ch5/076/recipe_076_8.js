const original = { name: "MDN" };
original.itself = original; // 循環参照

const clone = structuredClone(original);
console.log(clone.itself === clone); // 出力: true（循環参照も保持される）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBCBOBLA5osBDANjAvDA3jBgLYCmAXDAEQCyAIgHJUwC+A3AFAIppYB0iKBFKYAZrjhJUGTGxgB6eTEBV+oAaXQEPKgc0cOHUJFjBM4UhOjwArsCjn4pACYBhI2FIAKbtKwBKTnoghMUj4jZFdDYwEhEXEcWJhwlx8FJUAvxUBspUooC1JACH+1LUAghkBd+UBAY0BVBkAYhkBohkBIf6A
