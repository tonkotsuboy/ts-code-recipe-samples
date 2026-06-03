class Parent {
  protected greet(): void {
    console.log("親からの挨拶です");
  }
}

class Child extends Parent {
  public greetFromChild(): void {
    super.greet();
    console.log("子からの挨拶です");
  }
}

const child = new Child();
child.greet(); // コンパイルエラー

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAEAKYCcCmA7ALtA3gKGtADggPZpLCkAm0A5skmgBQCUAXNAG5ECWVOeewIighEQSAHQgi1BgCJAVZGBpBkCRDIDsGQBTGgN6NA5gyBNBllMA3LmgBfbOeyhIMAMIALLiCpIAHqRQUY8ZOiwn8AFcAIxAuYBo6NAAxYgBbBycKZjZOHn9+aAhA-CQEcVokemZjTMFhUQkpGVlABW0VDR19IxNzS3KIDGBHZ2gAXmgUJAB3aETnEqseigKokugAegXoQGaGQGeGQEWGQBKGQGuGQAqGQEuGQB+GIA
