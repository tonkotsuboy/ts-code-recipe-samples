const originalArray = [1, [2, 3], { a: 4 }];
const clonedArray = structuredClone(originalArray);

clonedArray[1][0] = 100;
clonedArray[2].a = 200;

console.log(clonedArray); // 出力: [1, [100, 3], { a: 200 }]
console.log(originalArray);
// 出力: [1, [2, 3], { a: 4 }]（変更されない）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBCBOBLA5osBDANgQXvdAnjALwwDaAjADTkBMNAzALo0DeM6AXDACwwC+TANwAoUJFjBM4AKYATXPiKlo8AK7Aoa+PIDC0sDIAUCFGiyLCASlFiD8ywUpMyABiYkYFV69FTZCniEZLRMAHTonrQ+tuIQIJgyYdLIRv6GgUo2MAD0OTCAX4qA2UrclDSUPowsMOxcMNGuAkxi4PGJySCppqgYOEEENiJ5hSXk1HRVbBzcfIKAEP+AkJqAL2aAqgyAMQyAVgyAIgyAkP9AA
