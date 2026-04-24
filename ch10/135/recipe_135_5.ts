class User {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

const user = new User("鈴木", 30);
console.log(user);
