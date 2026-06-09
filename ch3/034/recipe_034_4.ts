interface BaseUser {
  id: number;
  name: string;
}

interface AdminUser extends BaseUser {
  role: "admin";
}

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/JYOwLgpgTgZghgYwgAgEJwM4QKpasgbwChllgATALmRAFcBbAI2gG4Sa56JqMwpQA5mwC+RIqEixEKAILl6oXNGQQAHpBDkMaTDjyF2UAPYAbbsgBEceaAsigA
