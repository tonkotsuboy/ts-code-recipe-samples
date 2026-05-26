class User {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

type UserConstructorArgs = ConstructorParameters<typeof User>;

function createUser(...args: UserConstructorArgs): User {
  return new User(...args);
}

console.log(createUser("鈴木", 30));
