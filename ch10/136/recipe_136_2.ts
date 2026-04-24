async function fetchData(): Promise<{ data: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { data: "Hello, TypeScript!" };
}

type Result = ReturnType<typeof fetchData>; // Promise<{data:string}> 型

const promise: Result = fetchData();
promise.then((r) => console.log(r));
