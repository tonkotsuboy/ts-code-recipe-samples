class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const user = new User("田中太郎", "tanaka@example.com");
console.log(user.name); // 出力: 田中太郎
console.log(user.email); // 出力: tanaka@example.com
