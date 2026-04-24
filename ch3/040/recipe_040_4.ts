const arr = [1, 2, 3];
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype); // true

const date = new Date();
console.log(Object.getPrototypeOf(date) === Date.prototype); // true
console.log(Object.getPrototypeOf(Date.prototype) === Object.prototype); // true

const promise = Promise.resolve();
console.log(Object.getPrototypeOf(promise) === Promise.prototype); // true
console.log(Object.getPrototypeOf(Promise.prototype) === Object.prototype); // true
