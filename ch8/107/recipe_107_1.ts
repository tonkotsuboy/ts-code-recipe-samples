new Promise<void>((resolve) => {
  setTimeout(() => {
    console.log("10秒後に成功しました");
    resolve();
  }, 10_000);
});

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/HYUw7gBACgTg9gWwJYGcQB4BuckBMB8AFITCCnADaYgCUEAvPhAN4BQEEaALgCpIIg4AVy7E6jFuw4QAxnGDkKIAHQU4Ac0IAiAIwAGQEuegGP1A1gyAEI0D5SoHUGQH4MVwPoMWmgG4pHUouqEXUgL4AaCH0AfT0wn18XIA
