// プリミティブ型の別名（typeのみ）
type UserId = string;

// ユニオン型（typeのみ）
type StringOrNumber = string | number;

// 交差型（typeのみ）
type HasName = { name: string };
type HasAge = { age: number };
type Person = HasName & HasAge;

// タプル型（typeのみ）
type Point = [number, number];
