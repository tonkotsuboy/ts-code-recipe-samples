const fruits = ["りんご", "バナナ", "みかん"];

// splice: 元の配列を変更する
const removed = fruits.splice(1, 1, "パイナップル");

console.log(fruits); // ["りんご", "パイナップル", "みかん"]
console.log(removed); // ["バナナ"]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBAZgJwK4EsoRgXhgbQESBRDIMkMgKgx4A0MegCwyBTDLRVYP4Mg0gxF4C6A3AFA8D0-GBAAOAGxTAApgC4YgYUVAdgyBZRMDoSoCSGQJCagF7NAmgyBohh6hIsBFIC2IAG5SAJlnjI0EAHSiJ0gBQBGSr6qAiwyAJQy0gMMMgOsMgNcMeACUvEbgECBiUi5iIADmnoio6HEwgriEpIx4wWFRpazsHAmQyanpWWaWNrb5hfh0DBxAA
