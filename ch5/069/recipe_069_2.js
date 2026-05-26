const numbers = [10, 2, 30];

const result = numbers.toSorted((a, b) => b - a);
console.log(result); // [30, 10, 2]
