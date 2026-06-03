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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAEASCuBbMA7aBvAUNaB3MIA1gBQCUG2O0wA9ihDSAKYB0INA5sQET5HekA3JQC+mMZlCQYAIQCWAJwAmFHADMQATzKqqteo1bsu3DZoHCcYifogAXaIk0AxeCmB25daAF5oxVDlkEAAuOCRUaAAfaHllUjCANxo5FR8APl05NX9A4Og5ejtUYCYaHIRkFHIsKmg8ghY+EiFoAHo2+pQggkB7BkrUQGj1UWgmEAgmXRwGkBYzMkF2zpneuKVhq3FhTCdXd086YhQmXHCqslaO6EAYBmbAWAZACwZAL8VAbKVAVQZAGIZAaIYdlzcPLwoI4nWKKJQXRZXa5mR6vT5fIA
