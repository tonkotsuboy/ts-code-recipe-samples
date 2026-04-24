const numbers = [5, 8, 3, 1, 9, 2];
const result = numbers.map((num, index, array) => {
  const isMax = num >= Math.max(...array);
  return `${num}は最大値${isMax ? "です" : "ではありません"}`;
});
console.log(result);
// [
//   "5は最大値ではありません",
//   "8は最大値ではありません",
//   "3は最大値ではありません",
//   "1は最大値ではありません",
//   "9は最大値です",
//   "2は最大値ではありません"
// ]
