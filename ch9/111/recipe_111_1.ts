const user = {
  name: "田中太郎",
  age: 30,
};
console.log("name" in user); // true
console.log("age" in user); // true
console.log("email" in user); // false
