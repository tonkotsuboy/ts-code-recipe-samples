function greet(name: string, age: number): string {
  return `こんにちは、${name}! あなたは${age}歳です。`;
}

type GreetParameters = Parameters<typeof greet>;
// [string, number] が抽出される

const args: GreetParameters = ["鈴木", 30];
console.log(greet(...args));
