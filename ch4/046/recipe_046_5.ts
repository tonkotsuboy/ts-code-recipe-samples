function add(a: number, b: number): number | bigint {
  if (Number.isSafeInteger(a) && Number.isSafeInteger(b)) {
    const sum = a + b;
    if (Number.isSafeInteger(sum)) {
      return sum;
    }
  }
  return BigInt(a) + BigInt(b);
}
console.log(add(Number.MAX_SAFE_INTEGER, 1));
// 9007199254740992n（安全値の範囲外なのでBigIntを返す）
console.log(add(Number.MAX_SAFE_INTEGER, 2));
// 9007199254740993n（BigIntにフォールバック）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAQwCaoBTIFyLCAWwCMBTAJwBpEjd9jyBKWw0sxAH2pgHMYwpEAbwBQiRDGCIMAORbkAdDADOAZWTASASX4lu5LA0QAyI4ln0yi1eq069ZDEQaGRYsRARKBSwogC8KIgA1NQA3KJuElLmrFZqGtpQuvo+BM5CEW6IZCRQIGRIqeFZAL4RZWI5eQWIAEI8iQbBdQ38jgzhZR5gSnAANiTyfXDcWOgycpYAsgCCABoA+iozAGIAogua0gAqawDiawBKVACMzuEA9BeIAJwADHcA7Cc3NwBMAKwALI9fd69vMCACH-AJHagAtFQAkCoA7BkAI96AJ7VAGiagCsGKGAcwZ6txEoAkhkAK-GATQZAJD-wm6vQGQxGY0wMQUs0Wy3Wmx2+yOVDe52EV1uD2eAO+v3+NwAzMCMYlANYMgFWGQCVDIAfhkA1wyABYZAMMMgHqGAlAA
