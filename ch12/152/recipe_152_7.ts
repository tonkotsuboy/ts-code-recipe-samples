// 意図的な型エラーデモです。setter を持たない読み取り専用プロパティへの代入はコンパイルエラー（TS2540）になります。
// 書籍では recipe_152_6.ts で定義された User クラスを前提としていますが、単体で動くように同梱しています。
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
user.id = 456; // コンパイルエラー
