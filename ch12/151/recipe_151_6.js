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
