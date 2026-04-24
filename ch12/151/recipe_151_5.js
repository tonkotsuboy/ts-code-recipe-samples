class MyClass {
  #myBrand;

  static isMyClass(object) {
    return #myBrand in object;
  }
}

const myInstance = new MyClass();
console.log(MyClass.isMyClass(myInstance)); // true

const foo = {
  name: "鈴木",
};
console.log(MyClass.isMyClass(foo)); // false
