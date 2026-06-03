const user = {
  age: 18,
  name: "田中",
};

// userオブジェクトの型を抽出
type UserType = typeof user;
// UserType: { age: number; name: string; }

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBArhApgJxgXhgbwFAxgQwHNEAuGARgA4AaXGMfAW1JgCJAGV0Fo5V2gXwG5s2APTD4SZICqGQGsMgDoZA5QyB6hkATDIDsGQNHqgJIZAvUaAvxWxQAngAdEMAKoSAKibMYjpkADNxKQaIvXbZTAWJkwOEYAIzd6JhZoZABLMEJ+GF4gA
