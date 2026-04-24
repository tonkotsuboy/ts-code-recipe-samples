const numbers = [10, 2, 30];

const result = numbers.toSorted((a, b) => a - b);
console.log(result); // [2, 10, 30]
