const text = "今日は晴れです";
const regex = /晴れ/;
const matches = text.match(regex);
console.log(matches);
// 出力：[ "晴れ", index: 3, input: "今日は晴れです", groups: undefined ]
