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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/PTAEB90FHtHTvQFbUHYMh5VUDIZho+QFADMCuA7AYwBcBLAez1AGcBTIgYTPyIAoCm8iAuUPHAWwBGNAE4ReOADaSAlKADeGUKHZ4qRUFhJ4AhpMbNQAXhUcNkUAEYADAG5QIUNcAyDIEI7QKoMgGIZAZgyAghhuA1gyAVgyAxgzegOoMgH4MgGIMSqAidDgilFq6+ma2GAC+GBiqVGSSNAB0kmQA5iy0DGYs1jIy9o42gBD-gPCGgM9q4UGAIgyACr6AOeaAkP95FAVFpRVVdAacLACsDU1g86NqhSVlldWzrHzSSw5gNrmOAPxnsIiAFcaAFpqYuISkFNQzZgDKOlg0bGY8fEJROJ9rIFHF8hpUnpdsZTIYLlY7EcnIB7BkAkOaATqVACQKgAsGcLeQCORoB4hk8gGiGOIJIhJFLaaEZbK5fIbSbbN7MT7fOqHRzWdpdQD6DIMRkyJltpjV2V8fotGsjViLNlMdh8pSwQdzjtYgA
