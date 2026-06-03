// 😀（U+1F600）👍（U+1F44D）
const text = "😀👍";
console.log(text.length); // 4（UTF-16コード単位の個数）
console.log([...text].length); // 2（見た目どおりの文字数）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/PTAEl4NwAPcCH+FUGoCMAxAbABnYSH-yFkduSyALEQCJYBQAxgPYB2AzgC6hMCmAHiwLygBEUPHwDc1egxoAbNgDpJNAOYAKdlzls6CpgAsAlMNAhQROABVkAWkSpAzQyAfhkCTDIA1lQLLygOwZA0AqAHU0q1GU2XllAG0ZMNUmAF11TR19QzAAJmhAaMjAfQZAO7dASwZAKQZAKIY3QHDTQHVtHyA
