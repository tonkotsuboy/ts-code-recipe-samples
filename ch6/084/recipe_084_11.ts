function greet(age: number, name = "ゲスト") {
  console.log(`こんにちは、${name}さん（${age}歳）`);
}

greet(25); // こんにちは、ゲストさん（25歳）
