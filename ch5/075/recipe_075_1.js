// 配列のコピー
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
copiedArray.push(4);
console.log(copiedArray); // [1, 2, 3, 4]
console.log(originalArray); // [1, 2, 3]（元は変更されない）

// オブジェクトのコピー
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
copiedObject.c = 3;
console.log(copiedObject); // {a: 1, b: 2, c: 3}
console.log(originalObject); // {a: 1, b: 2}（元は変更されない）
