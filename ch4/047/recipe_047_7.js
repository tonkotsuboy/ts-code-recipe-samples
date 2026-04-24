console.log(BigInt(Number.MAX_SAFE_INTEGER)); // 9007199254740991n
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 1n);
// 9007199254740992n
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 2n);
// 9007199254740993n   ☆正確な計算結果
