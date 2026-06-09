const myArray = [1, [2, 3], [4, [5, 6]]];

const result1 = myArray.flat(1);
console.log(result1); // [1, 2, 3, 4, [5, 6]]

const result2 = myArray.flat(2);
console.log(result2); // [1, 2, 3, 4, 5, 6]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBAtgTwIICcUEMEwLwwNoCMANPgEwkDMAuiXgCy0CsJAbFewNwBQXoksKAKYQArgBsoBHPGRpMAOgBmY9FAAUBAJTc+EEGMHyxIAOZqhoiVo4wA9LfzEY5GBRIN8zGGyo9dA4XEoUmlEVAwEJRV1Um1ecD0DI1NzQIlYm3tHEhc3GA8vNiA
