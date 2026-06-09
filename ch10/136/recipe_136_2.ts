async function fetchData(): Promise<{ data: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { data: "Hello, TypeScript!" };
}

type Result = ReturnType<typeof fetchData>; // Promise<{data:string}> 型

const promise: Result = fetchData();
promise.then((r) => console.log(r));

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/IYZwngdgxgBAZgV2gFwJYHsLwKbKgCwBFhlgAKASgC4YAFAJ3QFtURsAeAbxgBMTgaIZPVQQA5jAC+APhicAUDBjAA7sFTIYEbCrqMWbMmXrYQ6ADYA3bBRgBeWW2QAVVE2zoEyY6YvWANDAAjAAMYRQUANyKMCbICPRY3HykNABEABLY5ubogc5gAA7YAMpQIoXIAIRpUtGS8vLIRdgwAEqmCOaadu24CRAFxezNxehwOHhE-NKRMAD083rMrBycKQJCIuIyMIDR6o1QmEIwhfqrNB0gXT2TBMSklNFnK2wAdMj42BBG9LYOMCOEDM5mwb1yYmMEUiQA
