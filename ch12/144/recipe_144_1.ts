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
