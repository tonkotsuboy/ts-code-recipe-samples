class Person {
  greet() {
    console.log("こんにちは");
  }
}

class Employee extends Person {
  work() {
    console.log("作業中");
  }
}

const user = new Employee();
user.work(); // Employee.prototype で見つかる
user.greet(); // Employee.prototype → Person.prototype と探索される

console.log(
  Object.getPrototypeOf(Employee.prototype) === Person.prototype,
); // true
