type Result = Exclude<"a" | "b" | "c", "a">; // "b" | "c"

const sample: Result = "b";
console.log(sample);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAShDOBXANsKBeKBRAHgY2UQBMIAeAIgENyoAfKcgIxvvL3IBoHqA+AbigB6QQ2Z0G7AFCS8AewB28NPEoBbMMggAuWAhRpMTcnxkL4szQDpksgOYAKFes0BKPkA
