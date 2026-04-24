// ||演算子の問題例
function setCount(count: number | null) {
  const finalCount = count || 10; // 0が渡されても10になってしまう
  return finalCount;
}
console.log(setCount(0)); // 10（意図しない結果）
console.log(setCount(5)); // 5
console.log(setCount(null)); // 10
// ??演算子の推奨例
function setCountSafe(count: number | null) {
  const finalCount = count ?? 10; // 0は有効値として扱われる
  return finalCount;
}
console.log(setCountSafe(0)); // 0（意図した結果）
console.log(setCountSafe(5)); // 5
console.log(setCountSafe(null)); // 10
