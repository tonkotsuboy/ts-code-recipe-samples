type NestedPromise = Promise<Promise<string>>;
type Result = Awaited<NestedPromise>; // string型が抽出される

const sample: Result = "hello";
console.log(sample);
