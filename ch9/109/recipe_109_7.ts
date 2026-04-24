class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("佐藤");
console.log(typeof user); // "object"
