class Parent {
  protected greet(): void {
    console.log("親からの挨拶です");
  }
}

class Child extends Parent {
  public greetFromChild(): void {
    super.greet(); // 親クラスの protected メソッドを呼び出し可能
    console.log("子からの挨拶です");
  }
}

const child = new Child();
child.greetFromChild();
// 親からの挨拶です
// 子からの挨拶です

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAEAKYCcCmA7ALtA3gKGtADggPZpLCkAm0A5skmgBQCUAXNAG5ECWVOeewIighEQSAHQgi1BgCJAVZGBpBkCRDIDsGQBTGgN6NA5gyBNBllMA3LmgBfbOeyhIMAMIALLiCpIAHqRQUY8ZOiwn8AFcAIxAuYBo6NAAxYgBbBycKZjZOHn9+aAhA-CQEcVokemZDaAB6Muh5QHqGQEuGQE6GVQJiUnIkKkBDhkBehkBhhkBJhkAkhkAfFUBnBkAvxUB1BkB75UBfgJMBIRExSWk5QAVtFQ0dfSMTc0tBYQxgR2doAF5oFCQAd2hE5xKrU4oCqNiiBJeniqrNrT02F+GzUAN0QA
