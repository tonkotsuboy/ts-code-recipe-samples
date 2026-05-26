class User {
  readonly name: string;

  constructor(name: string) {
    this.name = name; // コンストラクター内でのみ初期化可能
  }

  changeName(newName: string) {
    this.name = newName; // エラー
  }
}
