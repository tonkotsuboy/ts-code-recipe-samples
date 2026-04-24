// 書籍では recipe_155_2/utils.ts と同じ内容を共有する前提で省略されています。
// 配布コードでは単体で動かせるよう、このフォルダにも同じ内容を置いています。
export function greet(name: string) {
  console.log(`こんにちは、${name}さん!`);
}
export function farewell(name: string) {
  console.log(`さようなら、${name}さん!`);
}
export const greeting = "こんにちは";
