// Recipe 104_2: async 関数の return 値は自動的に Promise でラップされる
async function getValue() {
  return 10; // 呼び出し側にはPromise<number>として見える
}

const valuePromise: Promise<number> = getValue();

valuePromise.then((value) => {
  console.log(value); // 10 が出力される
});
