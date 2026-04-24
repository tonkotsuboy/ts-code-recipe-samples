// 書籍では recipe_069_1 の numbers を引き続き使っているため、
// このファイル単体で動くように numbers の定義を同梱しています。
const numbers = [10, 2, 30];

const result = numbers.toSorted((a, b) => b - a);
console.log(result); // [30, 10, 2]
