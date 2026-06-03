class Parent {
  greet() {
    console.log("親の挨拶");
  }
}

class Child extends Parent {
  override greet() {
    super.greet(); // 親クラスのメソッドを呼び出す
    console.log("子の挨拶");
  }
}

const childInstance = new Child();
childInstance.greet();
// 親の挨拶
// 子の挨拶

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAEAKYCcCmA7ALtA3gKGtA5skmgBQCUWue0wA9ihLSEgHQi34kBEgVZGB2DIApjQG9GXMgG4qAX2zTsoSDADCACwCWIACbQkADzSoNMeMnSU8tAG5IECVRqQEipCjmrQIAVwAO1loSTE5GLQAPQh0DyA9QyAlwyAnQx8gIcMgL0MgMMMgJMMgEkMgD4qgM4MgF+KgJoMVHh0DEys7JxcgAragiLiUjLYcvQQGMBqmgCSDGhgKMAOALzQKEgA7tAq6hpBcp0aPW39g35Oc2ERddibtcJAA
