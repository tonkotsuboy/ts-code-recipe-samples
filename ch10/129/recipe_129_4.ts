type PartialUser = {
  id?: number;
  name?: string;
  email: string;
};

type RequiredUser = Required<PartialUser>;

// idを省略しているのでエラー
const invalidUser: RequiredUser = {
  name: "鈴木",
  email: "suzuki@example.com",
};

console.log(invalidUser);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBACghgJ2ASzgGwKoGcIKgXigG8AoKKZAEwH4AuKAOwFcBbAI1wG4zG4WI6ULMATIGAc27kILOMjT1hoidwC+3EqEhQAShACOTZAgiVsuAroNGTlADzwkqTDgQA+DQHpPFSoCSGQEB3QFNXQHUGQDMGQBEGQGiGQDsGQHMGQAqGQEuGQB+GEgBjAHsGYQoGADd0KnMEej1DY1MSy1JyBj4IegAiQBYkwApzJoAaHhk5BSgmrCYALyYAa2QAAQgADz4wNAgAOiyWLpJ1EgzsrEzFpbRM8QAKMUK0YtcASk4gA
