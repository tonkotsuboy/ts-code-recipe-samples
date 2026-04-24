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
