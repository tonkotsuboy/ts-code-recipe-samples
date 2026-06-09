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
    super.greet();
    console.log("ワンワン！");
  }
}

const dog = new Dog("ポチ");
dog.greet();
// こんにちは、ポチです
// ワンワン！

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAECCB2BLAtmE0DeAoa15mQFMAuaCAFwCdF4BzAbix2mAHt4LKBXYc1ygBT4ipTjVoBKTM1zkAFoggA6YYWgBePAUKNcAXya5alQoXICJpAG6tEAE2m5cbDqxCElIVrQEADQMoMgMkMgNYMgIYMgPYMgIAMACQY8ooq2nqA5gyAmgy+ErrQBgZYoJAwACLe0IQAHuSE8HYwCChojizsnDx8gqqiVOJS2E5kXAAOhO3amcy5RiZmFta2Dr1OEIPDSsam5mN9LhBuHl4+AESA9wyAzwyngID-B5vZWLnb5NB2JZrwhADu0MWHgLsMgIMMV4wnrRVlMNowAPTg6BBMJRP5pLCQ6CnC5AA
