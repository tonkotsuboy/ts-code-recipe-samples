const user: {
  name: string;
  age: string | number;
} = {
  name: "田中",
  age: 24,
};

// ageは文字列もしくは数値のどちらかを代入できる
user.age = "二十四歳";
console.log(user);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBArhApgJwFwwN4CgYzAQwFtF1pkBLMAcwG4cZ8qSYzKqYAfPOQgIxToBfGAF5M9AsXQAiQAyugWjlpAGnqNmAJgAsKwXSwB6fQyaB7BkDhpoHVtQOhKgIIZA6gyB5BhOAHU0AkCoDsGQJYMgQwZAkQyBpBkAkhkBjuUBTRUBzBkBZBkBohiwEFAA6NVEYaUAYuUBBZUBttUBna2k6UEgQABtEBOKQKgAKeOQAShogA
