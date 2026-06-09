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

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/PTAEnWGQrhkfYZDGGRihkGsMho9UHYMhSJULAqgIf4C4E8AHAU1UH8GQSH+AoAk0AVQGdiAnASQBNQBeUR3FgEsAdgHMA3FSohQgM4ZA0wyAqhkDPDMjxFSlGhtABlASNEB5FgDkArgFsARqx58DY0AB9Qwq7ZaTpYQCVygO901Wk1qYNAACQBDRlNIy2J7AG83OOIALgchJwBfSTCoxgBBUQTeZMiSjPcbO1ztOgAFVkYAe2F7Atj40AAyCOji4m8ZQH6GcEBrhiCNclCdBpaRXHsAbWrPABo3D1YAXXEgA
