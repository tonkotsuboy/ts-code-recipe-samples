// super.greet() で親クラスのメソッドを呼び出したうえで追加の処理を行う例です。
class Parent {
  greet() {
    console.log("親の挨拶");
  }
}

class Child extends Parent {
  greet() {
    super.greet(); // 親クラスのメソッドを呼び出す
    console.log("子の挨拶");
  }
}

const childInstance = new Child();
childInstance.greet();
// 親の挨拶
// 子の挨拶
