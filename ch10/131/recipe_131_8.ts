type Result3 = Extract<"a" | "b" | (() => void), Function>; // () => void

const sample: Result3 = () => console.log("hello");
sample();
