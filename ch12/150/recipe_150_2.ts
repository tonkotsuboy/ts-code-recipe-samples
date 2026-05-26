class MyClass {
  #myAge = 42; // プライベートフィールドを定義

  getMyAge(): number {
    return this.#myAge; // プライベートフィールドにアクセス
  }
}

const myClass = new MyClass();
console.log(myClass.getMyAge()); // 42
