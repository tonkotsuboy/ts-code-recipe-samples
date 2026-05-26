class User {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      throw new Error("年齢は負の値にできません");
    }
    this._age = value;
  }
}

const user = new User();
user.age = 25;
console.log(user.age); // 出力: 25
// user.age = -5; // エラー: 年齢は負の値にできません
