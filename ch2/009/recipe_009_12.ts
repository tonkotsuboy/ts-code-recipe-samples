console.time("heavyLoop");

let total = 0;
for (let i = 0; i < 1_000_000; i++) {
  total += i;
}

console.timeEnd("heavyLoop");
// 出力例: heavyLoop: 12.345ms

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgziA2CmB0AXAlgW1gCgEQAtYEMA3ATwBkQQAHLASgG4AoBuRAAkREX2lYF5WADIwBmIAE6sMLVsj6C6M1gB5WARgD6ArZq0LkAan01WAbwat2nbq339kjAL5NQkGAhToAomAAm2PERkFNT0DAD0YayAX4qA2UqA0fIAXKwBJORUSaoATPAAzAAsAKyoEEA
