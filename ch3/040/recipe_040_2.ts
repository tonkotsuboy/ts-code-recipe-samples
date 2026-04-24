const myObject = {
  name: "鈴木",
};
console.log(Object.getPrototypeOf(myObject) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null
