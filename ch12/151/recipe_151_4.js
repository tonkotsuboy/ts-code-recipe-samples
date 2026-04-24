class MyClass {
  #myBrand;

  static isMyClass(object) {
    try {
      object.#myBrand;
      return true;
    } catch {
      return false;
    }
  }
}

const myInstance = new MyClass();
console.log(MyClass.isMyClass(myInstance)); // true

const foo = {
  name: "鈴木",
};

// ポイント
Object.setPrototypeOf(foo, myInstance);
console.log(MyClass.isMyClass(foo)); // false
