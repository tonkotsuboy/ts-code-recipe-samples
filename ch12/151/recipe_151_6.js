// 書籍では recipe_151_5.js の続きとしてプロトタイプ書き換えを試す例ですが、単体で動くよう
// MyClass / myInstance / foo の定義を同梱しています。
class MyClass {
  #myBrand;

  static isMyClass(object) {
    return #myBrand in object;
  }
}

const myInstance = new MyClass();
const foo = {
  name: "鈴木",
};

Object.setPrototypeOf(foo, myInstance);
console.log(MyClass.isMyClass(foo)); // falseのまま
