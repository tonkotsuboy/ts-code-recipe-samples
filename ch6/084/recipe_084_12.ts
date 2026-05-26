function greet(name = "ゲスト", age: number) {
  console.log(`こんにちは、${name}さん（${age}歳）`);
}

greet(undefined, 25); // こんにちは、ゲストさん（25歳）
