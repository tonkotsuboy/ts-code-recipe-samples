const myArray = [1, [2, 3], [4, [5, 6]]];

const result1 = myArray.flat(1);
console.log(result1); // [1, 2, 3, 4, [5, 6]]

const result2 = myArray.flat(2);
console.log(result2); // [1, 2, 3, 4, 5, 6]
