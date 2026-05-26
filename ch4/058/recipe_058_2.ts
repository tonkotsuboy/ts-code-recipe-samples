// 👨‍👩‍👧‍👦（U+1F468 U+200D U+1F469 U+200D U+1F467 U+200D U+1F466）
const family = "👨‍👩‍👧‍👦";

console.log(family.length); // 11（コードポイントとゼロ幅接合子を合計）
console.log([...family].length); // 7（見た目は1文字だが、コードポイントは7個）
