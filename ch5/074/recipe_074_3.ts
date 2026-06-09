const user = {
  name: "田中",
  age: 30,
  hobby: ["読書", "旅行", "ゲーム"],
} as const;

// Object.keys(): string[]（as constでもキーはstring[]）
const keys = Object.keys(user);

// Object.values(): ("田中" | 30 | readonly ["読書", "旅行", "ゲーム"])[]
const values = Object.values(user);

// Object.entries():
// [string, "田中" | 30 | readonly ["読書", "旅行", "ゲーム"]][]
const entries = Object.entries(user);

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBArhApgJxgXhgbwFAxmAQwFtEAuGAIkAZXQWjkKAaXGAgczJgGYAGRvACxAAjQQE9yAbQqBaqMAfZg0qBR00AyEfIqAmhkA-DIAOGCgF1GAX2YQYoSFADc2bAHobMAPKCAVomBQAdAGtEIiAAoASnJoZABLMBZxXUAIf4ITM2hAcwZAIIZAWoYNQHsGUIio3UBIf+xE2B8-dEcXN09SgIQUQKtbeydXdw8ANwIAGzhEAOCYf2o6GAAfTi4xmGREAgATcC6RGElZVWVVTR1dQOii8GgYTp6+8paqju7e2qRkBus7CtbPRDAocL6g0iaVnMj6Si0ChTbhTGbzRbLVZyAEUDawrZ6XR7YowV7vMKnDDnNroj43eoWIA
