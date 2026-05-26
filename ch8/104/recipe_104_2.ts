async function getValue() {
  return 10; // 呼び出し側にはPromise<number>として見える
}

const valuePromise: Promise<number> = getValue();

valuePromise.then((value) => {
  console.log(value); // 10 が出力される
});
