type Result = Extract<"a" | "b" | "c", "d">; // never

const sample: Result = null as never;
console.log(sample);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAShDOBXANsKBeKBRAHsATgIYDGwAPAESEVQA+UFARjfRcRQDQMAmFAfAG4oAemFQAdhABuEfACg5xAPbj4aeIQC2YZBABcsBCjSZxKZFELwJ02QMUr4S3QDpkSgOYAKDdt0BKASA
