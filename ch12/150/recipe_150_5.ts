class MyClass {
  #hello() {
    console.log("こんにちは");
  }
}

const myClass = new MyClass();
myClass.#hello();
// エラー: Property '#hello' is not accessible outside class
// 'MyClass' because it has a private identifier.
