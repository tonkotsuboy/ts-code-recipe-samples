function greet(name = "ゲスト", age: number) {
  console.log(`こんにちは、${name}さん（${age}歳）`);
}

greet(undefined, 20); // 出力: こんにちは、ゲストさん（20歳）
