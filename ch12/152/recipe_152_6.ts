class User {
  private _id: number;

  constructor(id: number) {
    this._id = id;
  }

  get id(): number {
    return this._id;
  }
}

const user = new User(123);
console.log(user.id); // 出力: 123
