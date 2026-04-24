const id = Symbol("id");
const user = {
  name: "田中",
  age: 30,
  [id]: 12345,
};
console.log(Object.keys(user)); // ["name", "age"]
console.log(user[id]); // 12345
