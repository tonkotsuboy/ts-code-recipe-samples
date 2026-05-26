function greet(name: string = "ゲスト") {
  console.log(`こんにちは、${name}さん`);
}

greet(); // こんにちは、ゲストさん
greet("太郎"); // こんにちは、太郎さん
