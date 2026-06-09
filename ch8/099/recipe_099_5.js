new Promise((resolve, reject) => {
  setTimeout(() => {
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      resolve({ id: 1, name: "鈴木" });
    } else {
      reject(new Error("データ取得に失敗しました"));
    }
  }, 2000);
})
  .then((data) => {
    console.log("取得したデータ:", data);
  })
  .catch((error) => {
    console.log("エラー:", error.message);
  });

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/HYUw7gBACgTg9gWwJYGcQAp0xCuAbANxABoJsArEAYwBcBKCAXgD4IBvAKAgjRoBUkCEHACuNTAxbsu3CFTjAUNCKgDKIqlRwomEALIBDGgAsAdDAPAAJonQNWABlMBWANwzuSAGYR0ajVooKAycsrLYuIQYbCpWAFwQAIykwAZCCQBEgCxJgBTmGRAAvnTuYQUQIHho0mHcFNTioJAAojDwMOgZgOMMgD8MgP0MgGvKgOn6gNYMgIyagOqmgOoMgH4Mk4D6DBl0xR6FMgWkAEwO28tFMqYmIMCYVkYGkqyhsvKK+CCmeHAA5h1D8z29cRmkpzTnJYU6PsqEYqMZMCBWnAYBdqtcFJF7o8XhlABUMgEuGbpfUiQtqmIRBAxPEDLbhFVxAA
