function greetOptional(name: string, age?: number): string {
  if (age !== undefined) {
    return `こんにちは、${name}! あなたは${age}歳です。`;
  } else {
    return `こんにちは、${name}!`;
  }
}

type GreetOptionalParameters = Parameters<typeof greetOptional>;
// [string, number | undefined] が抽出される

const args: GreetOptionalParameters = ["鈴木", 30];
console.log(greetOptional(...args));
