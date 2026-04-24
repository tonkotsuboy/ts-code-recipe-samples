const value = "hello";
type ValueType = typeof value; // "hello"型

const obj = { name: "田中" };
type ObjType = typeof obj; // { name: string }型
