class Person {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name: string) {
    const [first, last] = name.split(" ");
    this.firstName = first;
    this.lastName = last;
  }
}

const person = new Person("田中", "太郎");
console.log(person.fullName); // 出力: 田中 太郎

person.fullName = "佐藤 花子";
console.log(person.fullName); // 出力: 佐藤 花子
