// 書籍のPDFでは当該コードブロックが途中で切れており、クラス定義とインスタンス化の両方が
// 並んで掲載されています。原稿（drafts/chapter12/12-1.md）に合わせて完全な形で収録しています。
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const user = new User("田中太郎", "tanaka@example.com");
console.log(user.name); // 出力: 田中太郎
console.log(user.email); // 出力: tanaka@example.com
