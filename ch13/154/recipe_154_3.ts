export class Person {
  constructor(public name: string) {}
  greet() {
    console.log(`Hi, I am ${this.name}.`);
  }
}
