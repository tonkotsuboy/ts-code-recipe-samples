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
