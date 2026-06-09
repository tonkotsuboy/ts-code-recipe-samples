function greet(name: string, age: number): string {
  return `こんにちは、${name}! あなたは${age}歳です。`;
}

type GreetParameters = Parameters<typeof greet>;
// [string, number] が抽出される

const args: GreetParameters = ["鈴木", 30];
console.log(greet(...args));

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABAcwE4FN1QBRgIYC26AXIgM5SoxjIA0ieyJiYIBARuqgJSkVU1EAbwBQiRBighUSAAaBlBkDJDIGsGQIYMgewZAgAwASIfiIBfAISJAQgyArBkD6DOt2N0BwM7WgcwZAmgyAgBlkBuEQZEioAJ4ADuiIAOIYWAAKeKiEWFxkiAC8iDFxRFCJADyBIXDAKJFQAHzeAPTliADa-NR0LGycqAC6iIAyDIC9RoBfioCqDIAxDIDRDH4QCBQMqMhkpBGYUOnxWahJqdUARIAsSYAU5mv0AMwADC3eo2BkcAA26AB0F3DI2Ghz2NevsVPc3J5AA
