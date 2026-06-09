type User = {
  name: string;
  details?: { age: number };
};
const user: User = { name: "鈴木", details: { age: 25 } };

// ?.を使う場合
const age = user?.details?.age;
console.log(age);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3gKClAdgQwFsIAuKOYRAS1wHMBubKAEwmHyoBs4B+M9KPlqk8AV0IAjJFAC+jOZgDGAe1wUoohIjLxpaAQWJkARIBYkwBTmxgDQs2Hbv0HCyAJgCss2Y0wB6H1B4AOkAkhkB-eUAxBkAWDUAIFSVVdSFoNE0kINZ2Ll5AxMYVNWVOCEDOZVoACkSASnogA
