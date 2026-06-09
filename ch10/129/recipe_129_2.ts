type User = {
  name: string;
  age: number;
};

type OptionalUser = Partial<User>;

const user1: OptionalUser = {
  name: "鈴木",
};

const user2: OptionalUser = {
  age: 20,
};

const user3: OptionalUser = {
  name: "鈴木",
  age: 20,
};

const user4: OptionalUser = {};

console.log(user1, user2, user3, user4);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3gKClAdgQwFsIAuKOYRAS1wHMBubKfW0vAV0ICMlGBfRplCQoAeTDAqAewIAbeElRQACvkST8sgDwLEAPkEBjGRSjsEiAIxlxkmZt1KsOAsTIAiQCxJgCnN3AGkwBTExjXFNzJAAmGwlpOUc0Z2ZWMkiABgCgkJNgMwsAZhi7eIsnJlc2L18AnBY2dMyjHLykABYiuIdSxKzQuClZCAA6WSlaAAoIqz8WxEiZqfyFi1aASnogA
