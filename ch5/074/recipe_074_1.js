const user = {
  name: "田中",
  age: 30,
  city: "東京",
};

// キーを取得
const keys = Object.keys(user);
console.log(keys); // ["name", "age", "city"]

// 値を取得
const values = Object.values(user);
console.log(values); // ["田中", 30, "東京"]

// キーと値のペアを取得
const entries = Object.entries(user);
console.log(entries);
// [["name", "田中"], ["age", 30], ["city", "東京"]]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBArhApgJxgXhgbwFAxmAQwFtEAuGAIkAZXQWjkKAaXGAgczJgGYAGRvYASygBPchUCO5oBq5BtgC+AbmzYA9EpiBahkA-DICSGQGvKgdP1soSLADWiIRHQwA8gCMAVomBQAdGYsAKBCgCUCoxAgADaILkEgLB7uEH4wKjAA2hSEJAyUrIhpFALCFAC6ivGAJAq6BgGwAG4EQXCIlhh2js4uVTV1XkjIfobggSFhER6ttTFycapJtGnc9JSS+YWqmoAWDEWAdgyAWwyARQylPcYwiGBQyPx1Vo1OrofHpxAdvv69waHhkdcndd3xCUkpmbPUOh5WZJDLTLjAxLZQRCLLzPJ5IA
