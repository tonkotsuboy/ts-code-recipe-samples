// 意図的な型エラーデモです。クラス外部からプライベートフィールドへのアクセスは
// コンパイルエラー（TS18013）になります。
class MyClass {
  #myAge = 42; // プライベートフィールドを定義

  getMyAge(): number {
    return this.#myAge; // プライベートフィールドにアクセス
  }
}

const myClass = new MyClass();
myClass.#myAge;
// エラー: Property '#myAge' is not accessible outside class
// 'MyClass' because it has a private identifier.
