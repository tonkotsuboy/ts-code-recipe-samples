const text = "今日は晴れです";
console.log(text.slice(0, 4)); // 今日は晴
console.log(text.slice(3)); // 晴れです（第2引数省略で末尾まで）
console.log(text.slice(-3)); // れです（負のインデックスで末尾基準）
