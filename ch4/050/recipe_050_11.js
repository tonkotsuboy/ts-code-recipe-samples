const text = "今日は晴れです。明日も晴れです";
const result = text.matchAll(/晴れ/g);
const resultArray = [...result];
console.log(resultArray);
// [
//   ["晴れ", index: 3, input: "今日は晴れです。明日も晴れです",
//      groups: undefined],
//   ["晴れ", index: 11, input: "今日は晴れです。明日も晴れです",
//      groups: undefined]
// ]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBFCmAPWBeGAiQU3KFPTQ9gyBczQGIZBzBkE0GQIAZA4M20CCGIs9AbgChRJYAneCAVwBtUcJFAB0AWwCGUYAAsAgnz4AKAPREVAcwCULNtBhdeAuRw4SAnjDQBtEXcP8oAXV3gIIPvBF8QGpQ+NTCx1mFRUYa1DwmAj0InQAGhgASzAAEyQALhgAZiTUgAceKGysPHoKajoSUkSomIaYDQ4QHgKIbJ50+AAzVPg0pwT6mOs4wkSU7sRsgEZZ-LAikowcAhqqWgq6sMaY5tb2zu6+sAGneqcgA
