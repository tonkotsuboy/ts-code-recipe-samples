// instanceof 演算子が Object.setPrototypeOf によって偽陽性になってしまう例です。
class MyClass {}

const myInstance = new MyClass();

const foo = {
  name: "鈴木",
};

// ポイント
Object.setPrototypeOf(foo, myInstance);
console.log(foo instanceof MyClass); // trueになってしまう！
