async function getValue() {
  return 10; // 呼び出し側にはPromise<number>として見える
}

const valuePromise: Promise<number> = getValue();

valuePromise.then((value) => {
  console.log(value); // 10 が出力される
});

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/IYZwngdgxgBAZgV2gFwJYHsIwOYFNkBqwANgrgBQCUMA3gFAwwBO+CTWAjAAwDcMA9PxiAfFUDODIC-FQOoMgFwVA1gyB7BgAKTdAFtUIXAB4ICVQCNcTAHyALBkmAzBkDRkYAkGQNEMdAL506UTCGQwAbiTLK1GrgAXDD+6po6eoYmMAC8OPhEpBSUPC4+yWGBAHTIABa4EOTkGWTUsca0DDBuECDoxLjZxOjYJb64qQJC3DCAMgzigNlKgKoMgDEMDo6pQA
