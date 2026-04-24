const originalArray = [1, [2, 3], { a: 4 }];
const clonedArray = structuredClone(originalArray);

clonedArray[1][0] = 100;
clonedArray[2].a = 200;

console.log(clonedArray); // 出力: [1, [100, 3], { a: 200 }]
console.log(originalArray);
// 出力: [1, [2, 3], { a: 4 }]（変更されない）
