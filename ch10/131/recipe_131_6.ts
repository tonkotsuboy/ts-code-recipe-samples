type MyUnion = "a" | "b" | "c";

// MyUnionから "a" または "b" に代入可能な型を抽出
type ExtractedUnion = Extract<MyUnion, "a" | "b">; // "a" | "b"

const val1: ExtractedUnion = "a"; // OK
const val2: ExtractedUnion = "b"; // OK
const val3: ExtractedUnion = "c"; // エラー

console.log(val1, val2, val3);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAsiCqA7Alge0VAvFARAQxygB9cAjQknAYxwG4AoegeidgRXUGkGQSIZcCpAfgyB9BkD2DGUKBrBkDHcoFNFQPfKgX4DAVgyBo9UBJDIF6jQF+K9UJCgBRAB7AATnirAIAEyRoM2Y2YvAAPHDvoANHwriAfLRQLL7E4oxU6ADOwFAAbngANgCMAFyGJuaWNp4OvkEhAPIA0vSRiDHxSQBM6U5ZVrYceTjkBawlZdGxCYkAzHWZLjnNWLg07VCAFQyAlwyAPwwR0aiJEAB0iagA5gAUvck+vdUHSX0AlLRAA
