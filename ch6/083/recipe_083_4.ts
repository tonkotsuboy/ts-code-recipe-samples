function greet(greeting: string, name?: string): void {
  if (name === undefined) {
    console.log(greeting);
    return;
  }
  console.log(`${greeting}、${name}さん`);
}
greet("おはよう", "太郎"); // 出力: おはよう、太郎さん
greet("おはよう"); // 出力: おはよう
