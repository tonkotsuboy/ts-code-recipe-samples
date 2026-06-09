async function run() {
  const p = new Promise((resolve) => resolve(42));
  // const result: number = await p;
  // エラー: 'unknown'型を'number'に代入できない
  const q = new Promise<number>((resolve) => resolve(42));
  const result: number = await q; // OK
  console.log(p, result);
}

run();

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/IYZwngdgxgBAZgV2gFwJYHsIwE5IBQCUMA3gFAwxSYjIwAOMAvDBAKYDuMACtugLaoQrPHmysQ6ADYA3VkUYA+HOKmy8AFgBMBAgG5yMAPSHK1WmJAJJyAFwsEfAEatsTGMHbBUtOvorGYQAqGQEuGQB+GOwByJABrCHR2CAjAaPVAJIYIiAdnbAjAawZAY7lAU0VAcwZAWQZAKwZAEQYDKggaGABHNzZOHn5BVgAeDKcXBRELVTkmJQGZYS0dP1Na83ErW3se12YPL1p63SMTAHkAaWrqKVYAOkl0AHM8OgAaZUtrPVIAX1JSXAhCXSA
