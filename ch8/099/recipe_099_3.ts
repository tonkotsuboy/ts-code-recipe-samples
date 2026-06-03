new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("成功データ");
  }, 3000);
}).then((data) => {
  console.log(data); // "成功データ"
});

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/HYUw7gBACgTg9gWwJYGcQAp0xCuAbANxABoJsArEAYwBcBKCAXgD4IBvAKAgjRoBUkCEHACuNTAxbsu3MjnxF0AIkAIRoHylQOMMgH4ZA-QxK6AbhkBfUgGYADFcMdjdAHQ0AFiGCYAJgEManya07cVHDAuHgg9nhwAOboXj6GEAD0iRCqmrpKtoZAA
