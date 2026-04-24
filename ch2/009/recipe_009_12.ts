console.time("heavyLoop");
let total = 0;
for (let i = 0; i < 1_000_000; i++) {
  total += i;
}
console.timeEnd("heavyLoop");
// 出力例: heavyLoop: 12.345ms
