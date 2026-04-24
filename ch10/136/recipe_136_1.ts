type Result = Awaited<Promise<number>>; // number型が抽出される

const sample: Result = 42;
console.log(sample);
