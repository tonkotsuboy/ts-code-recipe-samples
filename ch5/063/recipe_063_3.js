const array = [1, null, 2, undefined, 3];
const result = array.filter((item) => item != null);
console.log(result); // [1, 2, 3]
