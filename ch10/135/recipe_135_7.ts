// 書籍では User クラスは recipe_135_5 側で定義されるが、単体で型チェックできるよう同ファイルに同梱。
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
