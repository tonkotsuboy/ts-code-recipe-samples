const myArray = [1, [2, 3], [4, [5, 6]]];
const result = myArray.flat(Infinity);
console.log(result); // [1, 2, 3, 4, 5, 6]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBAtgTwIICcUEMEwLwwNoCMANPgEwkDMAuiXgCy0CsJAbFewNwBQoksKAUwgBXADaxciVBgQA6AGaj0UABQBJMPICWYLVAQBKbrwghRA2aJABzFYJHijMAPTP8xGORgUSDGMxg2IA
