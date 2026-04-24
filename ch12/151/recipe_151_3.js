// プライベートフィールドは、宣言したクラスのインスタンスでないオブジェクトに対して
// アクセスすると TypeError を投げる仕組みを利用した例です。
class MyClass {
  #myBrand;

  static check(object) {
    object.#myBrand;
  }
}

const myInstance = new MyClass();
MyClass.check(myInstance); // OK

const foo = {
  name: "鈴木",
};

try {
  MyClass.check(foo); // 例外をスロー
} catch (error) {
  console.log("例外が発生しました:", error);
}
