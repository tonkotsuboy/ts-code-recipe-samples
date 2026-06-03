const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
  if (number === 5) {
    console.log("5が見つかったのでループを終了します");
    break;
  }
  console.log(number);
}

// 実行結果: 1, 2, 3, 4, 5が見つかったのでループを終了します

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBGCuBbARgUwE4RgXhgbQEYAaGAJhIGYSAWEgVhIDYSB2EgDhIE4BdAbgBQAgGYh0MABShIsBCgwwQwuEjSYAlDADeAmDACWyiXLU5suOpp1690iCAA2qAHQOQAcwkAiOoBkGQNGRgCYMgNIMgMYMgPoMgHYMgOYMgNcMgD8MgOsMgEkMgEK+gGFygOoMgH4MgJoMXuqCNjDI6KgAhgDWRTAAvrowdo4ubp4mGIUC9QIA9D0wgPnagDIRgAq+gDnmAFwwxGSUNPQBIRExCSkZOblAA
