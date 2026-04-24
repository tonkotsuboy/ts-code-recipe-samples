// 書籍では recipe_157_3/types.ts と同じ内容を共有する前提で省略されています。
// 配布コードでは単体で動かせるよう、このフォルダにも同じ内容を置いています。
export type User = {
  name: string;
  age: number;
};
export type Post = {
  title: string;
  content: string;
};
