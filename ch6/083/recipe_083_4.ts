function greet(greeting: string, name?: string): void {
  if (name === undefined) {
    console.log(greeting);
    return;
  }

  console.log(`${greeting}、${name}さん`);
}

greet("おはよう", "太郎"); // 出力: おはよう、太郎さん
greet("おはよう"); // 出力: おはよう

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABAcwE4FN1QBRs7MZALkQGcpUZCAaRMAQwFt0B+E8ywgShIDc4YAE0QBvAFCJEMYImwNmiALzLE4QemBV0grqImTEEBKTgAbdADpTcZLgxYqyLgG59kjFBCowryQF8xfSMwE3MrG2wAAwASETwHQj9AQAZY+XQ-QFUGQGSGSJcxALF4nAAiQCkGQHsGQAiGQDEGYtpiwCpNQDmE4pdEAHp2xEAvxUBspRIKmqTm7ML7EsHats6e-sRJoA
