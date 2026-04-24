// プリミティブ型の別名
type Text = string;

// オブジェクトの型
type User = {
  name: string;
  age: number;
};

// ユニオン型
type InputValue = string | number;

// 交差型
type HasName = { name: string };
type HasAge = { age: number };
type Person = HasName & HasAge;

// タプル型
type Point = [number, number];
