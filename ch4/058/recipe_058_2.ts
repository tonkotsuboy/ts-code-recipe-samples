// 👨‍👩‍👧‍👦（U+1F468 U+200D U+1F469 U+200D U+1F467 U+200D U+1F466）
const family = "👨‍👩‍👧‍👦";

console.log(family.length); // 11（コードポイントとゼロ幅接合子を合計）
console.log([...family].length); // 7（見た目は1文字だが、コードポイントは7個）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/PTAEl4NwLHcWAJ0Sx3aHMd2gzHcBD-BVA1ARgGIAsAbAByjYBMADFQCLm6FECcD1dD+xA7Gzfdi5EigSH+AUAGMA9gDsAzgBdQAMwCGAWwCWAGwCeoALygARFFgJwycCmMBuMZNlyp2gKYA6bVIDmACjVaep6uMt4KABYAlLagIKA4OGiAzQyAPwyAkwyAuwyAJQyAzwyAEwyAFgyAPQyAtwyAonqApcaAECqACtqASQxVgBBR4tLyLh5efgDa7r0BOroAusGhEdGxYNxogNGRgPoMgHdugPYMOIDhpoDq2oAGDIAyDICADKmZuXmL3IDQCiJAA
