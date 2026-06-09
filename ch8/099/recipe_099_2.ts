new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
}).catch(() => {
  console.log("Promiseが失敗しました");
});

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/HYUw7gBACgTg9gWwJYGcQAp0xCuAbANxABoJsArEAYwBcBKCAXgD4IBvAKAgjRoBUkCEHACuNTAxbsu3MiEq10dANwyAvqQDMABl0qOaugDoqAQxpUAFhKatO3KnGC48II3jgBzdACJYiVBBAGQZARk1AdVNAdQZAPwYIwH0GH31DZSA
