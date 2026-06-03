for (let i = 0; i < 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      break; // 内側のループのみを終了
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}

// 実行結果: i: 0, j: 1 / i: 1, j: 1 / i: 2, j: 1

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYewTgBAFANgpgFwgSwgXggBgNwogHggGZdkBqMgSggG8AoCCUSWRCAK3QgEZdP8MJDhWr1GjZMGic0siACZRDcYwBGYOAEMA1rgD0eiIFDFQC4KgOwZA1wyAfhkDrDGcD+DICSGQEK+gMLlljAL4eIAYxAAdgDOIPAAdDAgAOZQAAbIAFwQACQ0yJ4ANBxJqeyesZTYyt7edAYQgPnagDIRgAq+gDnmSYlYWexJ3BCGTdwtbR0oSfI9PEA
