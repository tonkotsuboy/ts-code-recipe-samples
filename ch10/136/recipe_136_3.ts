async function fetchData(): Promise<{ data: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { data: "Hello, TypeScript!" };
}

type Result = Awaited<ReturnType<typeof fetchData>>; // {data:string}型

const sample: Result = { data: "test" };
console.log(sample);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/IYZwngdgxgBAZgV2gFwJYHsLwKbKgCwBFhlgAKASgC4YAFAJ3QFtURsAeAbxgBMTgaIZPVQQA5jAC+APhicAUDBjAA7sFTIYEbCrqMWbMmXrYQ6ADYA3bBRgBeWW2QAVVE2zoEyY6YvWANDAAjAAMYRQUANyKMCbICPRY3HykNABEABLY5ubogc5gAA7YAMpQIoXIAIRpUtGS8vLIRdgwAEqmCOaadjAAgmoa2DzsHfGJBcXszcXocDh4RPzS0pEwAPTrcikCQiLikoDR6o1QmEIwIMBMhebYNB0gXT1yvPzpyKbItZLRpxBmtwAdLkxGRLtdblEgA
