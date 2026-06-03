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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAEASCuBbMA7aBvAUNaB3MIA1gBQCUG2O0wA9ihDSAKYB0INA5sQET5HekA3JQC+mMZlCQYAIQCWAJwAmFHADMQATzKqqteo1bsu3DZoHCcYifogAXaAAskqaAF5oKJrjguUZYVsHACNFFQ8vH3llAMxJOgZmNk5iZ2Q0OXo7VGAmGjVfdKFoAHoS6DsFeCZ4gyTjVL9oTPscvILopWKy6DUCCCYgA
