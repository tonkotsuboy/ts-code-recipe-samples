// 書籍では recipe_064_2 の myArray を引き続き使用しているスニペットのため、
// このファイル単体で動くように myArray の定義を同梱しています。
const myArray = [1, [2, 3], [4, [5, 6]]];
const result = myArray.flat(Infinity);
console.log(result); // [1, 2, 3, 4, 5, 6]
