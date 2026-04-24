// 意図的な型エラーデモです。protected メンバーへの外部アクセスはコンパイルエラー（TS2445）になります。
// 書籍では recipe_149_4.ts で定義された Parent / Child クラスを前提としていますが、
// 単体で動くように同梱しています。
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
