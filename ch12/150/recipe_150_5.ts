// 意図的な型エラーデモです。クラス外部からプライベートメソッドへのアクセスは
// コンパイルエラー（TS18013）になります。
class MyClass {
  #hello() {
    console.log("こんにちは");
  }
}

const myClass = new MyClass();
myClass.#hello();
// エラー: Property '#hello' is not accessible outside class
// 'MyClass' because it has a private identifier.
