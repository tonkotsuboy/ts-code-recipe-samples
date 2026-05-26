class Parent {
  greet() {
    console.log("親の挨拶");
  }
}

class Child extends Parent {
  greet() {
    console.log("子の挨拶");
  }
}

const childInstance = new Child();
childInstance.greet();
// 子の挨拶
