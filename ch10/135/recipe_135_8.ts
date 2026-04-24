class User {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

type UserInstance = InstanceType<typeof User>;
// UserInstance は User 型（{ name: string; age: number } を持つインスタンス型）

const user: UserInstance = new User("鈴木", 30); // OK
console.log(user);
