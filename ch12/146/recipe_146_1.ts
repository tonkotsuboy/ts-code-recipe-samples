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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAEAKYCcCmA7ALtA3gKGtA5skmgBQCUWue0wA9ihLSEgHQi34kBEgVZGB2DIApjQG9GXMgG4qAX2zTsoSDADCACwCWIACbQkADzSoNMeMnSU8hJMXJnqdBk1btOXQAragkeKkzsc+hAzAapoAkgxoYCjASNAAvNAoSADu0CrqGuQSgWmh-hFRLBZWngD0xdBuwkA
