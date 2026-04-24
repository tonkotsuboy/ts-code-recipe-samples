class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`こんにちは、${this.name}`);
  }
}

const user = new User("鈴木");
user.greet();
