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

const myFunction = (animal: Human | Bird): void => {
  if (animal instanceof Human) {
    animal.walk(); // animalはHuman型
  } else {
    animal.fly(); // animalはBird型
  }
};

myFunction(new Human()); // 「walk」と出力される
myFunction(new Bird()); // 「fly」と出力される
