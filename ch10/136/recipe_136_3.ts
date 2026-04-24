// 書籍では fetchData 定義が recipe_136_2 側にあるが、単体で型チェックできるよう同ファイルに同梱。
async function fetchData(): Promise<{ data: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { data: "Hello, TypeScript!" };
}

type Result = Awaited<ReturnType<typeof fetchData>>; // {data:string}型

const sample: Result = { data: "test" };
console.log(sample);
