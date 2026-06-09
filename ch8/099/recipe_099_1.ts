new Promise<void>((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
}).then(() => {
  console.log("Promiseが成功しました");
});

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/HYUw7gBACgTg9gWwJYGcQB4BuckBMB8AFITCCnADaYgA0EpAViAMYAuAlBALz4QDeAKAgQ0rACpIEIOAFdWxTj35Dh9MpWqF2AbhUBfOgGYADKZ0C97AHSsAFiGALuvQcOZxg5CiCsU4Ac0IAIlhEVBBAGQZABCNAfKVAdQZAPwY4wH0GIPNLbSA
