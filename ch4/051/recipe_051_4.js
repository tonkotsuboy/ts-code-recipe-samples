const text = "今日は晴れです";
console.log(text.substring(0, 4)); // 今日は晴
console.log(text.substring(-2, 4)); // 今日は晴（-2は0として扱われる）
console.log(text.substring(4, 0)); // 今日は晴（引数が自動調整される）
