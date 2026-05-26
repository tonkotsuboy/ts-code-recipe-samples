type MyUnion = "a" | "b" | "c";

// MyUnionから "a" または "b" に代入可能な型を抽出
type ExtractedUnion = Extract<MyUnion, "a" | "b">; // "a" | "b"

const val1: ExtractedUnion = "a"; // OK
const val2: ExtractedUnion = "b"; // OK
const val3: ExtractedUnion = "c"; // エラー

console.log(val1, val2, val3);
