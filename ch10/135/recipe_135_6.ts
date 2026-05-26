class User {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

function createUser(name: string, age: number): User {
  return new User(name, age);
}

console.log(createUser("鈴木", 30));
