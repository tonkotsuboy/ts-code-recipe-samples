type NoChange = Exclude<"a" | "b" | "c", "d">; // "a" | "b" | "c"

const sample: NoChange = "a";
console.log(sample);
