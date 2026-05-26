function greet(name = "ゲスト", age: number) {
  console.log(`こんにちは、${name}さん（${age}歳）`);
}

greet(20); // コンパイルエラー
greet(undefined, 20); // OK
