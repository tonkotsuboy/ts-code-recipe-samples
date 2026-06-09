function checkPositive(number: number) {
  if (number < 0) {
    throw new Error("数値は0以上である必要があります");
  }
  console.log("数値は正です");
}

try {
  checkPositive(5);
  console.log("処理が正常に完了しました");
} catch (error) {
  console.error("エラーが発生しました", error);
} finally {
  console.log("クリーンアップ処理を実行します");
}
console.log("後続の処理です");
// 数値は正です → 処理が正常に完了しました → クリーンアップ処理を実行します → 後続の処理です

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABBAFgUwgawApwM4ywBuaAFGCALYBGaATgFyIU30CUiA3gFCKIzBE5KrTqIAPIgAMHHnz5QUdOAHdmaNQFE6yuqQBEgB1NAJAqB7BimBTuUBQcoHMGQEIMgaIZAo-qBAyMAyDHcBRDID8GQJoM+tgBuXkQAXxCIBDw4ABs0ADoYuABzAxNTQGNrG38g7nDuKDoATy4I9CxcAmIyAFZcvkiwaLjElINAM8VAMBc3DMAOPUBrBkAY7UAwuUB1Bm9RwH0GAODQ5ABDKFQhel1ZCKjYhNW4PX1ACoZAS4ZAH4Y3QC83QHxXcan9ABpEHbpcueAYMHmYmJK5ZE2WpNS+kA9QyAK4ZjoBnhkARQyAYYZAOsMXUASQyAfO1ADIR4xys24jWaCQBBkAMfqALN9AHYMXWyM24AHpKYh0llfIhAEmEiC6PQGI2ukyZiFBEJh8M6yLRfm5RNJnWyQA
