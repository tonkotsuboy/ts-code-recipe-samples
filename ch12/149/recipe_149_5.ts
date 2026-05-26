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
