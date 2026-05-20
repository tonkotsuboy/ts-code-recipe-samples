const emptyArray = [];
// エラーが発生
try {
  const result1 = emptyArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );
  console.log(result1);
} catch (error) {
  console.log(error instanceof Error ? error.message : error);
  // TypeError: Reduce of empty array with no initial value
}
