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
