class Animal {
  name: string; // プロパティの型を指定
  age: number; // number型を指定

  constructor(name: string, age: number) {
    // 引数の型を指定
    this.name = name;
    this.age = age;
  }

  makeSound(): void {
    // 戻り値の型を指定（voidは何も返さない）
    console.log("動物の鳴き声");
  }
}

const dog = new Animal("ポチ", 3);
console.log(dog.name); // 出力: ポチ
console.log(dog.age); // 出力: 3
dog.makeSound(); // 出力: 動物の鳴き声

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAECCB2BLAtmE0DeAoa15mQFMAuaCAFwCdF4BzAbmgHonpB1hkFuGQRYZAxhkGKGQHYMgaPVASQyBwY0BZ2jmhhaJPAFdkAI0KVGLRSrWjJWacAD28CpQXByhygAp8RUqZq0ANDLml4S1ZQCUmabiagKj6gA6mwuJSuLjkABaIEAB0doTQALx4BIT0AdCx8QmyKemF2bgAvvq4qADWhADKhgrwACbWPqQAboaIzf5RzKyA3EaAUQyAJArhkoAQ-109gPYMgKrygEEMgCvxgKoMgFYMgCIMgJD-OUYmhiCECSCGtNYARICrSoCWTgKALzmAsgyADxoXPqXQFRVY+xTQzWc0nhCAB3OBIVAgS6AXYZAIMMF1cAGZ3j9jBBDsdTucAbQkpl3gNoIAvxUA2UqkOGog5HE5naw4gpyAmaUmkRFYek1eqNFptDSsFnQW4PF5AA
