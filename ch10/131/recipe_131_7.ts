type Result = Extract<"a" | "b" | "c", "d">; // never

// Resultはneverなので値を代入できない
const sample: Result = null as never;
console.log(sample);
