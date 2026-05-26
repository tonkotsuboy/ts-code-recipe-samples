function greet(age: number, name = "ゲスト") {
  console.log(`こんにちは、${name}さん（${age}歳）`);
}

greet(20); // 出力: こんにちは、ゲストさん（20歳）
