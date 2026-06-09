type User = {
  name: string;
  profile: {
    age: number;
  };
};
type ReadonlyUser = Readonly<User>;
const user: ReadonlyUser = {
  name: "田中",
  profile: { age: 24 },
};
user.profile = { age: 30 }; // エラー: profileプロパティは読み取り専用
user.profile.age = 30; // OK: ネストされたプロパティは書き換え可能

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3gKClAdgQwFsIAuKOYRAS1wHMBubKMRAewDMqAbUjJnfLV64AroQBGSRjgC+jOZlCQoAJQj4AJq1xcQ8JKlXqtOkAB59iAHyMAxtopQRCRGTWbtuy4aw4CxMgAiQAZXQFo5QIAaJhYObl50KEFeACYAFigZKIVnJAA6GM4eH0ShMgBmAAYM+igAelqoQAqGQEuGQB+GMgK4wHWGQFuGQEWGQDGGQGKGQHsGQFqowH8GQDXlQCiGQCAdQApXTBzEfLZCiFykw0qa+qgAeQBpMkBZhkBOhkAJhkBVBkAYhkB9Bl7B0cAPs0BZBkBt40AJBkB75UBfgKAA
