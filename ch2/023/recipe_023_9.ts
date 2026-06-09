function callGreet(greet: (() => string) | undefined) {
  return greet?.();
}

console.log(callGreet(() => "こんにちは")); // "こんにちは"
console.log(callGreet(undefined)); // undefined

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABBAhgGzQcQE4FNdQAUA5ngQFyKGECUiAvAHyIDOU2MYxdAPouABNcwTrgF0A3gChEiPFBDYkpfFAD8AOloBuKQF8pUiAhZw0uDWjjFCqDDlXU6TRACJAygyBkhkDWDIEMGQPYMrjQ02ogA9GFuXn6BRiZmFlY2dlhkRILCouIh4ZEZImBiQA
