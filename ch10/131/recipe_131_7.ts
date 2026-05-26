type Result = Extract<"a" | "b" | "c", "d">; // never

const sample: Result = null as never;
console.log(sample);
