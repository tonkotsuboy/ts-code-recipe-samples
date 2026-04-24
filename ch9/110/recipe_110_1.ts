class Human {
  walk() {
    console.log("walk");
  }
}

class Bird {
  fly() {
    console.log("fly");
  }
}

const human = new Human();
const bird = new Bird();
console.log(human instanceof Human); // true
console.log(human instanceof Bird); // false
