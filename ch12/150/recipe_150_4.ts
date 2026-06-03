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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAECyCeBhcVoG8BQ1oGIAWApiCAPYAUAlAFzQBuJAlgCbpbbTAkB2EJIBAOlIBzMgCJAygyBkhkDWDIEMGQPYMYigG42AXwxsIYeAAkipSjXrNW7aABc8DCAPyHyq6AHoX0QOsMgS4ZAJQyBNhkAfhkAJhkBDhkBehkBhhkBJhkAkhkAfFUBnBkAvxUB1Bg0MTQxOHktoAFskFBgAXmguAgB3OELICEo1AuRagR19R3rXdyTAbKUaaXkFIA
