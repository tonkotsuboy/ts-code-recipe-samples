async function fetchData(): Promise<{ data: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { data: "Hello, TypeScript!" };
}

type Result = Awaited<ReturnType<typeof fetchData>>; // {data:string}型

const sample: Result = { data: "test" };
console.log(sample);
