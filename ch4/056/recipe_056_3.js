const id = Symbol("id");
const user = {
  name: "田中",
  age: 30,
  [id]: 12345,
};

console.log(Object.keys(user)); // ["name", "age"]
console.log(user[id]); // 12345

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBAlgExgXhgZQJ4FsBGIA2AFAESLECUA3AFCiSwCuEApgE4owDe1MMYAhlmYAuGMUAMroFo5YgBoeMfgHMRMAMwAGObwDaiALqiAjACZVAFgCscgL41a4CAWYA6fCEWEA8jgBWzYFDOANbMGBCETGzkVDAA9LEw2sQCQrJiSszEevaQTq7uESysugh6MfEwJuYWQA
