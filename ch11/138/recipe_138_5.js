// RangeError を発生させる例。単体実行できるよう try/catch でラップしています。
try {
  const array = new Array(-1); // RangeError: Invalid array length
  console.log(array);
} catch (error) {
  console.error(error);
}
