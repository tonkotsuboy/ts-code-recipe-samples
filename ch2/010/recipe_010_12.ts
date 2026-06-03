const numbers = [1, 2, 3];
numbers.push(4); // 配列の要素を追加（OK）
numbers[0] = 10; // 最初の要素を変更（OK）
console.log(numbers); // [10, 2, 3, 4]

const user = { name: "田中", age: 25 };
user.name = "佐藤"; // プロパティを変更（OK）
user.age = 30; // プロパティを変更（OK）
console.log(user); // { name: "佐藤", age: 30 }

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBGCuBbARgUwE4RgXhgbQEYAaGAJhIGYBdAbgCgEUMIA6AB3ggAsAKAFgCUNGAHoRMQLKJgdCVAdgyBAyMAEvoCSGQL-xgAqVAEP8B5ANKBIf4ZI0mPAAYqOGAVPCxMQADmgXCV5ywJCagF7Nt+uqEggANqgs-iAA5jyMxhBCouKEpiTkMBQkfFR0PuDQMJwYlgDecACGiKgAXDAARIAMroC0cpUkRaHlZACsMAC+9LnoLGAlqJaVgArygCehlbbigOsMgLcMgIsMgGMMgMUMSh5eBj0sTYO4FDaxMLOLK2u6Br4QAUEh4T0xdoX9pRUj443NFXudQA
