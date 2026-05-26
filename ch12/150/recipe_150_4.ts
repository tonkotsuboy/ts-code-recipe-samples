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
