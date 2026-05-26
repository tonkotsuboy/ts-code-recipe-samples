function greet(name: string = "ゲスト") {
  console.log(`こんにちは、${name}さん`);
}

greet(123); // コンパイルエラー
