// クラス定義のみのサンプルのため、末尾に動作確認用の呼び出しを追加しています（書籍にはありません）。
class MyClass {
  #myAge = 42; // プライベートフィールドを定義

  getMyAge(): number {
    return this.#myAge; // プライベートフィールドにアクセス
  }
}

const myClass = new MyClass();
console.log(myClass.getMyAge()); // 42
