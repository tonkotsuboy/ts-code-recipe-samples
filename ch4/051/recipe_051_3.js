const text = "今日は晴れです";
console.log(text.slice(0, 4)); // 今日は晴
console.log(text.slice(3)); // 晴れです（第2引数省略で末尾まで）
console.log(text.slice(-3)); // れです（負のインデックスで末尾基準）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBFCmAPWBeGAiQU3KFPTQ9gyBczQGIZBzBkE0GdAbgChRIQAbeAOnpAHMAKBZJiegS2DwOABgA0MACwBKaRRgB6BTBwEa4CA2atO3KLwFCOAZlnylMImUAQ-4BpvAEyBUfUAOpoEB3QKauxQNTmgPh1AfgzEgJD-6nSMLOxcSPp8gsIAtKZyisokpNaABTGAdgyAJQyAzwyA4wyAwwyA9QyAnQzePoBf6oBpdoFAA
