class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): void {
    console.log(`名前: ${this.name}, 年齢: ${this.age}`);
  }

  haveBirthday(): void {
    this.age += 1;
    console.log(`${this.name}の新しい年齢: ${this.age}`);
  }
}

const person = new Person("太郎", 20);
person.introduce(); // 出力: 名前: 太郎, 年齢: 20
person.haveBirthday(); // 出力: 太郎の新しい年齢: 21

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAEAKCmAnCB7AdtA3gKGtADogJYBuYALvNGmALbwBc0E5xaA5gNy4HFmXQw7RtQCutAEZJuPYOhaJRwcikQAKGvSYKiHADSDhTNOKmIAlFh55yACyIQAdJqoBeanXjc8N+06Fuhl48AL7YPLqsKAAmSvBq5kwkKETRVj7QcmioIPCOICjsagAGgLAqgLJKTAAkmHYOzp4hBoAueoBG+dW1fo4BIcXm3tBhPLZgJPAAQkSIdtFgAJ4JSSlpOBl1-sLQANTuAIwDeFk5eQVFxTXrDfQhgHYMgA2mgOoMgCIMbR2XPX0DYUNH5ARIqAw7jQ8AA7nAAeg1AAiQBUmoA5hOhBgATAAGfrYfCQtCOSKIGJxBKcaAAehJ0EAX4qAbKUmBUmAiWu1oGjMdjHCMxpNprZZgt+qTydT6fD7s9XszdkA
