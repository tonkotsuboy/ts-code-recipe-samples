const proto = { shared: 1 };
const obj = Object.create(proto);
obj.own = 2;

console.log("shared" in obj); // true（継承プロパティ）
console.log(Object.hasOwn(obj, "shared")); // false（自身には無い）
console.log(Object.hasOwn(obj, "own")); // true
