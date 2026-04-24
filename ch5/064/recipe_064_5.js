const numbers = [1, 2, 3];
const tripled = numbers.flatMap((n) => [n, n * 3]);
console.log(tripled); // [1, 3, 2, 6, 3, 9]
