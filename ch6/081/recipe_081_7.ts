const person: {
  name: string;
  greet(name: string): void;
} = {
  name: "鈴木",
  greet(name) {
    console.log(`こんにちは、${name}さん`);
  },
};

person.greet("太郎"); // こんにちは、太郎さん

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBADgUwE4XALhgbwFAxmAQwFsENokBLMAcwG5cZqkEEoAKQksqSmgSgwA3EBQAm9AL4wAvFgadSMAESAWJMAU5koA0DJi3YK+cvHlCQQAGwQA6cyGpsABoGUGQMkMgawZAhgyB7BkCADABJMBQlAVQYXBz56PAltCXpsRBRwK11WNiVAKk1AOYSlCJgAejyYV09fLNCgA
