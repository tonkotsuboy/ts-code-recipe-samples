const originalArray = [1, [2, 3], { a: 4 }];
const clonedArray = structuredClone(originalArray);
console.log(clonedArray); // 出力: [1, [2, 3], { a: 4 }]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBCBOBLA5osBDANgQXvdAnjALwwDaAjADTkBMNAzALo0DeM6AXDACwwC+TANwAoUJFjBM4AKYATXPiKlo8AK7Aoa+PIDC0sDIAUCFGiyLCASlHiIITDIB005EamyFea0JgB6PxhAL8VAbKVuShoyehhmNg5uPkEgA
