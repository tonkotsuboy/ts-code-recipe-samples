class Example {
  private secret: string;

  constructor(secret: string) {
    this.secret = secret;
  }

  private revealSecret(): void {
    console.log(`秘密は${this.secret}です`);
  }

  public showSecret(): void {
    this.revealSecret(); // クラス内部ではアクセス可能
  }
}

const example = new Example("TopSecret");
example.showSecret(); // 出力: 秘密はTopSecretです

example.secret; // コンパイルエラー
example.revealSecret(); // コンパイルエラー
