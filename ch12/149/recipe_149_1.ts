class Example {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet(): void {
    console.log(`こんにちは、${this.name}さん`);
  }
}

const example = new Example("鈴木");
example.name = "田中"; // 変更可能
example.greet(); // 出力: こんにちは、田中さん

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAECiAeYC2AHEBTaBvAUNaKArgEYgCWw0AdsugFzQQAuATmVQOYDcOe0wAeyrMWhYEwEsAFDST1GrdhwCU2PviYALMhAB0szAF5qtHvgC+vfEVIVoHFunRMpyhgDcBZACZr8+QWEBDF0QAQ4pAANAZQZAZIZAawZAQwZAewZAQAYAEiwtHX1ac0BVBljI5TNoS0scQOZodERUDGhjKnQAdzg6tHQpACJAFiTACnNukpxa5E7cuUbobsAGV0BaOW6uaAB6ZehASE1AF7NAe+VAX4CRjpCHJxcSlbXAL8VAbKUGOKS0+cKgA
