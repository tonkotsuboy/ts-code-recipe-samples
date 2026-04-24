const isObject = (value: unknown) =>
  value !== null && typeof value === "object";

console.log(isObject(null)); // false
console.log(isObject({ name: "田中" })); // true
console.log(isObject([1, 2, 3])); // true（配列もobjectになる）
