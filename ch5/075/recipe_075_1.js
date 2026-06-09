// 配列のコピー
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
copiedArray.push(4);
console.log(copiedArray); // [1, 2, 3, 4]
console.log(originalArray); // [1, 2, 3]（元は変更されない）

// オブジェクトのコピー
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
copiedObject.c = 3;
console.log(copiedObject); // {a: 1, b: 2, c: 3}
console.log(originalObject); // {a: 1, b: 2}（元は変更されない）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/PTAEllEx0JUOwZGaGQVhkD8MAoAxgewHYGcAup0AnASwHNjMBDAGwEFDDKBPUAXlAG0BGAGlACY+AZgC6AbjRY8oDAAdiAUwAm9Ri3YcAdNqJkKNVc3GT5yw002yArtgAWACgAsASgkYc6ags3V0pe3KKKgzMrqAgnLwCwnyOIpIeXj5+9rrkVHQhTGER3HyCoKKAEP+AwoqA9gyAkJqAL2aAqgyAMQyAVgyAIgyAkP-IyBGAVQyAawyAHQyA5QyA9QyAEwxwSAnSafrUAPIARgBWCqj47ADeoJQAXKBRczv8oAC+blL4gcrzSytsoBvamlMZV8v4JyZBLyuaqLdCp4lvL5-BclF9cDkwGttrs+PtojIdkIjhNPECUk8aODIXcYXsDkdSpVao1WkA
