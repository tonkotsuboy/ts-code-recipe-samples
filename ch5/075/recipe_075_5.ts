// 配列の結合
const fruits = ["りんご", "バナナ"];
const vegetables = ["にんじん", "キャベツ"];
const foods = [...fruits, ...vegetables];
console.log(foods); // ["りんご", "バナナ", "にんじん", "キャベツ"]

// オブジェクトの結合
const userInfo = { name: "田中", age: 30 };
const contactInfo = { email: "tanaka@example.com" };
const user = { ...userInfo, ...contactInfo };
console.log(user);
// {name: "田中", age: 30, email: "tanaka@example.com"}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/PTAEllEx0JUOwZAVfQIFQFAGMD2A7AzgF1AMwCcBXAS201AF5QBtAIkCiGQZIZAVBjoBpQ7AFhkCmGXugF0A3Cgw5QANwCmAc2nYAhgCMANtIrV6gawYmgDQYmHLoFqGQMcMgTYZAIwxDRaLLjypUAE020AdJ8KlynT+5l5JTUNETEsVHV3VVRZAApHF0wASmFQEFpGViMefhzdAxyzKyFERAzAKoZANYZADoZAcoZAeoZACYY4JDsJIkxpAgBJdEcqUABvUHRFAFtpAC4uQAZXQFo5I0V5GYBmAAZQAF9bcVw7JWRsPoHqEelxxRJVGbolMYBrRQABaQAPCYAHKLRxum3dvZQJ1uoMRv4Qb1+qg-J4DoojidUADwphItJorE4pDUuUwEMxpNbgslitQBtOBcrjcuPdFE9Xh9xt8Mb86FsgA
