class User {
  constructor(
    public name: string,
    public age: number,
  ) {}

  greet(): string {
    return `こんにちは、${this.name}です。`;
  }
}

// Userクラスのコンストラクター型を抽出
type UserConstructor = typeof User;
