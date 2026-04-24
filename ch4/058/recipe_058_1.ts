// 😀（U+1F600）👍（U+1F44D）
const text = "😀👍";
console.log(text.length); // 4（UTF-16コード単位の個数）
console.log([...text].length); // 2（見た目どおりの文字数）
