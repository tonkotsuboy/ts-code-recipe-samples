const text = "今日は晴れです";
console.log(text.substring(0, 4)); // 今日は晴
console.log(text.substring(-2, 4)); // 今日は晴（-2は0として扱われる）
console.log(text.substring(4, 0)); // 今日は晴（引数が自動調整される）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBFCmAPWBeGAiQU3KFPTQ9gyBczQGIZBzBkE0GdAbgChRIQAbeAOnpAHMAKBZJiAVwBG0AE4BLMJwAMAGhgAWAJQKKMAPSqYOAjXAQGzVp25RegkeM4BaAEyzFytRq35AEP83ckwBYMgdQZAZgyBHI0B4hkJAaIZASH+dOkYWdi4kE34hKDEJDjlZSSUVdU08V0BUfUAHU0AZBkArwMBVpUB+qMAXU0BVBlCwoA
