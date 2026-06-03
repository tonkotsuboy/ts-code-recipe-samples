function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

for (const n of numberGenerator()) {
  console.log(n);
}
// 1
// 2
// 3

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mAVAAjCAtgIwKYCcDi2YeAhlHLgBQCUyA3gFDLICeM2ANgCbICMA3E1btuyAEyDmbTjwDMggL4MGwCskoQEAZyipkcYKgw4CRUuSrVajZprBa4HbADoOcAOaUw1RQwD0fnz+gWLByLJAA
