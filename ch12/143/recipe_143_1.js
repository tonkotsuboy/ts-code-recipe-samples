class Animal {
  name; // nameプロパティを持つことを宣言
  age; // ageプロパティを持つことを宣言

  // コンストラクター
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const dog = new Animal("ポチ", 3);
console.log(dog.name); // 出力: ポチ
console.log(dog.age); // 出力: 3

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYGwhgzhAECCB2BLAtmE0DeAoa15mQFMBuaAejLwMMHWGQW4ZBFhkDGGQYoZAkhkEBjQEwZBlBkAsGNoGLtQABROaGADmJcpUm1GrTrwEisYitEDNDIGeGQJ0MgCYZAlwyB6hkD9DIB+GMcAD28CABcATgFdg9644AU+IgBpxUgCUmGK49gAWiBAAdD6E0AC8VETEodARUdFyiQEkYgC+WIVYNnb20AAm1hI58IQA7nBIqCCeAESAuwyAgwxt-gDMgamlENYghNEg1Z5VErHUgzLQgF+KgNlKAFzQ3SW2I2MTUzNZQaQaqxt9QA
