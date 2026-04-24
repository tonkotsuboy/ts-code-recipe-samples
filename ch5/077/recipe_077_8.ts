// 配列のSymbol.iteratorメソッドを確認
const numbers = [1, 2, 3];
console.log(typeof numbers[Symbol.iterator]); // "function"

// 文字列のSymbol.iteratorメソッドを確認
const text = "Hello";
console.log(typeof text[Symbol.iterator]); // "function"
