const originalObject = { a: { b: 2 } };
const copiedObject = { ...originalObject };

copiedObject.a.b = 42;
console.log(originalObject.a.b); // 42（元のオブジェクトも影響を受ける）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBCBOBLA5osBDANgeQEYCsBTYWAXhgG8Z0AuSmXOgJhgF82BuAKFEllAAOiQgBM8REjHJUAdHIQo0WccVituPEENEqSM9DNxSYAFibdeEEJkIzMIZAAoFqDDgKr9hgJQcYAen9TJkAIf8BhRUA7BkAqhkA1hkAOhkByhkB6hkAJhkAghkBHfUB-9MAkhkB15UBFBkBohkBIf6A
