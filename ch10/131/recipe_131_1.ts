type Result = Exclude<"a" | "b" | "c", "a">; // "b" | "c"

const sample: Result = "b";
console.log(sample);
