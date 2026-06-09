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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAECiAeYC2AHEBTaBvAUNaKATgJYBuYALphOsIehQFzQQUkB2A5gNw57TAA9u1aEArsAqDCAChp0GzUcS4BKbP3wUAFsQgA6efQrQAvC1rHe+AL598RMpUz1S6MCADKlhjNXNSQWIAEw18fCERQQx9EEFOGQADQA3PQDHtQHsGABIsHT1DHwobQHMGQE0GRNVraDt+FDEAIxBiYBZtQQB3bwUKPwCg0Nxw6FyDV3cvAr9uaAB6aehAeoZAS4ZAToZAUMVAC4Si9MAihnnAboZlwHvlQF+A-jtqyNZodERUDDNodnQ2uFu0dBkAIgAVQRRO4yfCo4G7Id6GVodCYVGZzQBfioBspWYaXSv3+BVKfFBd3Q+S6U1m0EAzQyAZ4ZAIsMgBKGQDXDIAKhkWgB+GEFvGKjDwA3wwwmkym0hlAA
