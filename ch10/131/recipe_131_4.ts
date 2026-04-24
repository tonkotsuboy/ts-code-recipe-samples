type WithoutFunction = Exclude<"a" | "b" | (() => void), Function>; // "a" | "b"

const sample: WithoutFunction = "a";
console.log(sample);
