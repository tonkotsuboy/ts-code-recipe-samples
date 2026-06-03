// 配列のSymbol.iteratorメソッドを確認
const numbers = [1, 2, 3];
console.log(typeof numbers[Symbol.iterator]); // "function"

// 文字列のSymbol.iteratorメソッドを確認
const text = "Hello";
console.log(typeof text[Symbol.iterator]); // "function"

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/PTAEllEx0JUOwYGUE8C2AjA9gGwHQEsAuBTAJwENdVDBDhkF6GQYYZBJhkCSGQLo9BYqICgBjVAOwGddQ3AK4oivUAF5QAbQCMAGlAAmRQGYAugG5OPXhnyZ0qAOYAKXPAAO+VADNBI5GOkIUGHARJlC6gJSbQEFAAIlshbg5cbB5gtjYgwHDTQHVtGFc0LDwiUnJqemZ2Lj4BAgAPASlggAl8dCNg7UK9dAMjMwtrO1BS3BckdI8s7z8AoNDwyOjuYKA
