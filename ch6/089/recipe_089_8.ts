function* myGenerator(): Generator<string, void, number> {
  let count = 0;
  while (true) {
    const increment = yield `現在の値: ${count}`;
    if (typeof increment === "number") {
      count += increment;
    } else {
      count++;
    }
  }
}

const gen = myGenerator();
console.log(gen.next().value); // 現在の値: 0
console.log(gen.next(10).value); // 現在の値: 10
gen.next("Hello"); // 型エラー

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mAVAAgLYE8DiBTM2BOAhlHPgBQCUAXMjnkSfgDwDOU+MYA5gDTIBucGABM+YEKgBGBAHzIA3gChkyADbYoyCHHCaAvMgAMAbmXIA7gAsY65GXYhsFBWZXawbZJwj5sqXPrI6DDYqsLIAAaAf86AFOqAdgyAJAo0ACTy2roAvhGmKiowwHZQ6AAO2HAF3r7+YPp6BgBE4lIE9c5KubnpNcgA1AaVfgE5uRnIoSzYLh1uOjU9PcMqGWbLy4runly4yAYYdATEpJSmG3DqAHSqcFxkW2DneAAeUJTn-ISqjhTGyAD0v8hYokaIZ1ggWGdsJdrrdcA9sM8yABGQwUN4fL4-f6A+JJZAoxR3eGI+oACVCV1aWIBgGj1QAVDIBLhkAPwxAA
