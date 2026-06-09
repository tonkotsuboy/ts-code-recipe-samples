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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAEAKCmAnCB7AdtA3gKGtA5ovPAC4AUAlFrntMOqiPAHQgr5kBEgygyDJDINYMgQwZA9gycKAbhoBfbDOyhIMAKIBbAA5sAnsWjwAHiXhoAJjATJ01PAHcUiANaUrtemkYs2HToB15QLaWgWjkxSTwZOVcIEmgAVwgkaABeaDR4a2hVDRRteEpJGKRmWwcc6AB6ErT1LWJmNUQUEnrNNXhoQHMGQGjIwBMGQGkGQGiGbDzEZkJicglS8vSqllr6xuboQCTCOCRUNBq6hpImlsALBkAi40AiX0BVBkAYhn75BhQmVnYyGgB5ACMAK3hgEmHSWE35+AeAGZkKaZaqzLY7KjxaErCzrcF-AA02HGZWgJEQUXgQA
