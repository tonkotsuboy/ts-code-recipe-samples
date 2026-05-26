async function run() {
  const p = new Promise((resolve) => resolve(42));
  // const result: number = await p;
  // エラー: 'unknown'型を'number'に代入できない
  const q = new Promise<number>((resolve) => resolve(42));
  const result: number = await q; // OK
  console.log(p, result);
}

run();
