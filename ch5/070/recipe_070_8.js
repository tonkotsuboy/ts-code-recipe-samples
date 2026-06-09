const fruits = ["りんご", "バナナ", "みかん"];
// toSpliced: 元の配列を変更しない
const newFruits = fruits.toSpliced(1, 1, "パイナップル");
console.log(newFruits); // ["りんご", "パイナップル", "みかん"]
console.log(fruits);    // ["りんご", "バナナ", "みかん"]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBAZgJwK4EsoRgXhgbQESBRDIMkMgKgx4A0MegCwyBTDLRVYP4Mg0gxF4C6A3AFAD0fGFBABlAA4AbFMACmAEwBcMQMKKgOwZAsomB0JUBJDIEhNQC9mgdQZAVgyARBh6hIsMDIDuAMWRoM2RKnQA6YeKmy5ACgBGSmCqQEWGQBKGWkBhhkB1hkBrhjwASl5LCBAJGQ8JEABzfxsHJ3QUmAFcQlJGPEiYhOrWdg4LcHTM7Lz-N2dSmD7y-GIyShp6BrZOIA
