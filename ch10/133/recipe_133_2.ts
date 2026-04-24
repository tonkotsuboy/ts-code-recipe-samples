async function fetchData(): Promise<{ data: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { data: "Hello, TypeScript!" };
}

type FetchResultPromise = ReturnType<typeof fetchData>; // Promise<{ data: string }>
type FetchResult = Awaited<ReturnType<typeof fetchData>>; // { data: string }

const promise: FetchResultPromise = fetchData();
promise.then((res: FetchResult) => console.log(res));
