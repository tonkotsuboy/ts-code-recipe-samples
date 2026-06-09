const proto = { shared: 1 };
const obj = Object.create(proto);
obj.own = 2;

console.log("shared" in obj); // true（継承プロパティ）
console.log(Object.hasOwn(obj, "shared")); // false（自身には無い）
console.log(Object.hasOwn(obj, "own")); // true

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBADgJxFEMC8MDeMIAsCGCApgCYBcMAjDAL4DcAUKJLCAEYBW6MA8p0cCgA6YMXxQiACkTIQASkbsOQkAHcw3AEyMm4CCAA2RIQZABzSQCI8hUpZgBLDUoUwA9G5hQEAVyKAIf8BM30B-I0B1hkBbhkBFhkAxhkBihkBIf91IQ2NTCz4OAWECCB51SSUAGhhrAmISSzlXDxgAM3wDCADAK8DAarjAawZAewZAQkdAEQZE5n0jE3NJDKyhHLywAs5iyzUwSurPbz8gA
