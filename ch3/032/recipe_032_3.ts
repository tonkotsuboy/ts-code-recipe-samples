interface Animal {
  name: string;
  walk(): void;
}

class MyAnimal implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  walk(): void {
    console.log(`${this.name}は歩いています。`);
  }
}
