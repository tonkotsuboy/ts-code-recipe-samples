const originalArray = [1, [2, 3], { a: 4 }];
const clonedArray = structuredClone(originalArray);
console.log(clonedArray); // 出力: [1, [2, 3], { a: 4 }]
