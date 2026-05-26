function greet(greeting: string, name?: string): void {
  console.log(`${greeting}、${name}さん`);
}

greet("おはよう"); // 出力: おはよう、undefinedさん
greet("おはよう", "太郎"); // 出力: おはよう、太郎さん
