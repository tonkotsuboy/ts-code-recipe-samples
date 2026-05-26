const greet = (name = "ゲスト") => {
  console.log(`こんにちは、${name}さん`);
};

greet(); // 出力: こんにちは、ゲストさん
greet("太郎"); // 出力: こんにちは、太郎さん
