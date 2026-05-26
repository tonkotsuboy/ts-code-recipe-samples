try {
  const array = new Array(-1); // RangeError: Invalid array length
  console.log(array);
} catch (error) {
  console.error(error);
}
