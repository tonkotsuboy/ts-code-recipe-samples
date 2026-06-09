class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log(`こんにちは、${this.name}です`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  greet(): void {
    super.greet(); // 親クラスのメソッドを呼び出す
    console.log("ワンワン！");
  }
}

const dog = new Dog("ポチ");
dog.greet();
// こんにちは、ポチです
// ワンワン！

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAECCB2BLAtmE0DeAoa15mQFMAuaCAFwCdF4BzAbix2mAHt4LKBXYc1ygBT4ipTjVoBKTM1zkAFoggA6YYWgBePAUKNcAXya5alQoXICJpAG6tEAE2m5cbDqxCElIVrQEADQMoMgMkMgNYMgIYMgPYMgIAMACQY8ooq2nqA5gyAmgy+ErrQBgZYoJAwACLe0IQAHuSE8HYwCChojizsnDx8gqqiVOJS2E5kXAAOhO3amcy5RiZmFta2Dr1OEIPDSsam5pnQAPRb0IBVkYD1DICXDICdDIB2DICHDIC9DIDDDICTDIBJDIA+KoDODIBfiqkyTa7unt4CACJAPcMgGeGUGAQH+AWN9Fhci4KNA7CVNPBCAB3aDFHwAwC7DIBBhihjCRtFWUw2jB20CCYSi+LSWEpoIhQA
