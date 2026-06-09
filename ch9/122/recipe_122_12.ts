const value = "hello";
type ValueType = typeof value; // "hello"型

const obj = { name: "田中" };
type ObjType = typeof obj; // { name: string }型

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBAbgQwDYFcCmMC8MBEALNJJEHAbgCgoBPABwwDVl0AVWjbaukAM3ibVIwA9ENwEiJQNHq5cqEiwQAIwBWWGAG8YYBAFs0ALlyAGV0C0cjhgBfCpwwB5FazpqbPGEuWCRGrboMxoAE4AlmAA5paSQA
