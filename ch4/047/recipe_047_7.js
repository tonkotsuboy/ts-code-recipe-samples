console.log(BigInt(Number.MAX_SAFE_INTEGER)); // 9007199254740991n
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 1n);
// 9007199254740992n
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 2n);
// 9007199254740993n   ☆正確な計算結果

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgziA2CmB00QHMAUAhAlsgkmALqgHICuAtgEawBO8AsgIIAaA+gMoMBiAoizkQBVuAcW4AlAJQSA3AAIA9PNkBOAAyqA7AEZlygEwBWACwajq3VrAAoUJBgIkaLLgLFyVWo1YcefQSPEJWQBqWUsZK0UVdW1dQxMzOOtbKDhEFAxsPEJSShp6ZnYuXn4hUUkQ2T0wCKi1TR19Y1NzZQBmMFkuwDAyQGNrQC6PQCsGQAgowHTvQAVfQBzzIA
