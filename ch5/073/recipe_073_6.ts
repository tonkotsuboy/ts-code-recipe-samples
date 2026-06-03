type OptionalAddress = {
  name: string;
  address?: string;
};

type UndefinedAddress = {
  name: string;
  address: string | undefined;
};

const userWithOptional: OptionalAddress = { name: "高橋" };
// addressを省略可能
const userWithUndefined: UndefinedAddress = {
  name: "高橋",
  address: undefined, // プロパティの定義は必須
};

console.log(userWithOptional, userWithUndefined);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBA8mwEsD2A7AhgGwIIBMcCcIBnIqAXigG8AoKKdAWwgC4ojh8EUBzAblqho8hEgH5W7Tj34BfftVCQoAVRQ4IAMy4QcuAsVIUadRizYcufAUP0kJFnlAA+UAK5rN2nLPkBjVOxuRBD4AOoIwAAWcIiomKwxyOjYwgbkVPRoTKwARIAbWYDSVjlQctQA9GWCqSSASQyAgO6Apq6A98qAvwHU-iiBrsFhEZGq6looOqwDnsO61YZUAqa5hTkANNZTrO6DXotQFVCA6wyAtwyAiwyAYwyAxQyAdgyAWdqAlf6A9gyAo-qAEBnUpe0BSBgQAHQYSNwAFN0QuEook4hgtkDelExkMdABKXhAA
