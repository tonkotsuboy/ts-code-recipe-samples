type PartialUser = {
  id?: number;
  name?: string;
  email: string;
};

type RequiredUser = Required<PartialUser>;

const user: RequiredUser = {
  id: 1,
  name: "鈴木",
  email: "suzuki@example.com",
};

console.log(user);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBACghgJ2ASzgGwKoGcIKgXigG8AoKKZAEwH4AuKAOwFcBbAI1wG4zG4WI6ULMATIGAc27kILOMjT1hoidwC+3EqEhQAShACOTZAgiVsuAroNGTlADzwkqTDgQA+DQGMA9g2FQmV3o9Q2NTczxCUnIqegBGABoeBj4IegAiQBYkwApzdKTpWXkMrCYALyYAa2QAAQgADz4wNAgAOh8WPJJ1EhIfP29mlrRvcQAKQNwASk4gA
