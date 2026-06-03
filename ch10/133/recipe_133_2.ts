async function fetchData(): Promise<{ data: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { data: "Hello, TypeScript!" };
}

type FetchResultPromise = ReturnType<typeof fetchData>; // Promise<{ data: string }>
type FetchResult = Awaited<ReturnType<typeof fetchData>>; // { data: string }

const promise: FetchResultPromise = fetchData();
promise.then((res: FetchResult) => console.log(res));

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/IYZwngdgxgBAZgV2gFwJYHsLwKbKgCwBFhlgAKASgC4YAFAJ3QFtURsAeAbxgBMTgaIZPVQQA5jAC+APhicAUDBjAA7sFTIYEbCrqMWbMmXrYQ6ADYA3bBRgBeWW2QAVVE2zoEyY6YvWANDAAjAAMYRQUANyKMCbICPRY3HykNABEABLY5ubogc5gAA7YAMpQIoXIAIRpUtGS8vLIRdgwAGK4BABKpgjmyAzMrK12MD3xiQXF7M3F6HA4eET80pEwAPTrekNsXLz8gsKiEjJNLe2d+D0gfZqjAIJqGtg87OMJEFMcsx4LcJfEUjSVYbLbJA4wIQicRSRpQTBCGCFfTDGgdJbXW6DAwjRYEQHkKLyZE7bAAOmQ+GwECMJhAaMumP6tgcMHhEDM5nJuTEPhAEUiQA
