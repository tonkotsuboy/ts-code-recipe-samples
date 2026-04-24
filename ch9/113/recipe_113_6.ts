function isNumber(value: number | string): value is number {
  return typeof value === "string";
}

function main(value: number | string) {
  // ランタイムエラーになるまで気づけない
  if (isNumber(value)) {
    value.toFixed(2); // TypeError: value.toFixed is not a function
  }
}

main("豚骨きゅうり");
// 実行結果：TypeError: value.toFixed is not a function
