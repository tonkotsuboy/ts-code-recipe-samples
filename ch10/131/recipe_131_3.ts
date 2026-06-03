type RemovedC = Exclude<"a" | "b" | "c", "c" | "d">; // "a" | "b"

const sample: RemovedC = "a";
console.log(sample);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAShC2B7AbhAJgYSgXigUQA8BjAGwFc0IAeAIgEMaoAfKGgI0ZZqJoBpWezVmhoA+ANxQA9FNYMh7GgCglRRADsAzsCia68MCQgAuWAhTosuejXGqNmxEYB0JRAHMAFHoNGAlOJAA
