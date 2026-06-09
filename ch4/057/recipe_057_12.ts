let num = 10;
num -= 5;
// エラー
let str = "hello";
// @ts-expect-error ts(2362)
str -= 5;
console.log(num, str);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/DYUwLgBAdgrgthAvBAjABgNwChYILTICs2A9CRIBUMglwyA-DFqJAM5gBOSEARABYjDAD2HUuQACYRnhAAPAA4gAxmEksW-NuIAUAJgDMANi0BKLMzYEIxLPP5RG-UADoBAcw24ANBFOGMQA
