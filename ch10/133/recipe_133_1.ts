function greeting(): string {
  return "Hello, TypeScript!";
}

type GreetingResult = ReturnType<typeof greeting>;
// string型が抽出される

const result: GreetingResult = greeting();
console.log(result);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAcwE4FN2zMgFASgC5EBnKVGHRAbwChFEMoRUkAiACXQBtu4AaRABUAngAd0AZQgUxUAIRsA3LQC+tWlHHpEAcQxZKyAEroSIblEQBeRKeatREgDxaJcYCgPZkAPhUA9AGk5EaA0eqAMgyAvUaAX4qAqgyAMQyA0QwaEAhkjGYWUMT6mD6m5pY2XvlGBCppYCRw3OgAdHx4GEVQ+EpAA
