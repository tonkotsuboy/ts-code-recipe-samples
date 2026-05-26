function greet(name = "ゲスト", age = 30) {
  console.log(`こんにちは、${name}さん（${age}歳）`);
}

greet(); // こんにちは、ゲストさん（30歳）
greet("太郎"); // こんにちは、太郎さん（30歳）
greet("太郎", 25); // こんにちは、太郎さん（25歳）
