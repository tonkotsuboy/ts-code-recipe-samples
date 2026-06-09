function greet(greeting: string, name?: string): void {
  console.log(`${greeting}、${name}さん`);
}

greet("おはよう"); // 出力: おはよう、undefinedさん
greet("おはよう", "太郎"); // 出力: おはよう、太郎さん

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABAcwE4FN1QBRs7MZALkQGcpUZCAaRMAQwFt0B+E8ywgShIDc4YAE0QBvAFCJEEBKTgAbdADo5cZNgAGAEhF4sVZAF9AgAzaGzA4FUGQMkM6rgG4xBsWN04ARICkGQPYMgCIZAYgxu9ogA9MGIgF+KgNlKJN7+RuCC6MBU6ILWLhhY2J6+AbRugFSagHMJgXYhYVExuUbF1kA
