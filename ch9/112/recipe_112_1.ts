type A = {
  type: "a-type";
  foo: string;
};

type B = {
  type: "b-type";
  bar: string;
};

const objA: A = { type: "a-type", foo: "hello" };
const objB: B = { type: "b-type", bar: "world" };
console.log(objA.type); // "a-type"
console.log(objB.type); // "b-type"
