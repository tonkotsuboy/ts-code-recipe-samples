const text = "Hello";

// 最初の3文字を取得
const [first, second, third] = text;
console.log(first, second, third);
// H e l

// 配列でも同様
const numbers = [1, 2, 3, 4, 5];
const [a, b, ...rest] = numbers;
console.log(a, b, rest);
// 1 2 [3, 4, 5]
