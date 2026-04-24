// 書籍では User クラスは recipe_135_5 側で定義されるが、単体で型チェックできるよう同ファイルに同梱。
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
