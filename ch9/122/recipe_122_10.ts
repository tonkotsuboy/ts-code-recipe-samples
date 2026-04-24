class User {
  constructor(
    public name: string,
    public age: number,
  ) {}

  greet(): string {
    return `こんにちは、${this.name}です。`;
  }
}

// Userクラスのインスタンス型を抽出
type UserInstance = InstanceType<typeof User>;
// UserInstance: User
