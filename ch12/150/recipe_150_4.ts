// クラス定義のみのサンプルのため、末尾に動作確認用の呼び出しを追加しています（書籍にはありません）。
class MyClass {
  #hello(): void {
    console.log("こんにちは");
  }

  sayHello(): void {
    this.#hello(); // プライベートメソッドを呼び出し
  }
}

const myClass = new MyClass();
myClass.sayHello(); // 出力: こんにちは
