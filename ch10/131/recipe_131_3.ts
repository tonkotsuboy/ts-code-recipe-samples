type RemovedC = Exclude<"a" | "b" | "c", "c" | "d">; // "a" | "b"

const sample: RemovedC = "a";
console.log(sample);
