new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("エラーメッセージ");
  }, 3000);
}).catch((error) => {
  console.log(error); // "エラーメッセージ"
});

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/HYUw7gBACgTg9gWwJYGcQAp0xCuAbANxABoJsArEAYwBcBKCAXgD4IBvAKAgjRoBUkCEHACuNTAxbsu3MiEq10AIkAVDIEuGQD8MgQ4ZAwwyBuhg2AOhiV0A3DIC+pAMwAGe2Y4W6AOioBDGlQAWmEDHgYSVZObio4YFw8EBc8OABzdH9AswgAejSIVU1dA2MnMyA
