function checkPositive(number: number) {
  if (number < 0) {
    throw new Error("数値は0以上である必要があります");
  }
  console.log("数値は正です");
}

try {
  checkPositive(-3);
} catch (error) {
  if (error instanceof Error) {
    console.error(`エラーが発生しました: ${error.message}`);
  }
}

console.log("後続の処理です");

// 出力結果: エラーが発生しました: 数値は0以上である必要があります
// 後続の処理です

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABBAFgUwgawApwM4ywBuaAFGCALYBGaATgFyIU30CUiA3gFCKIzBE5KrTqIAPIgAMHHnz5QUdOAHdmaNQFE6yuqQBEgB1NAJAqB7BimBTuUBQcoHMGQEIMgaIZAo-qBAyMAyDHcBRDID8GQJoM+tgBuXkQAXxCIBDw4ABs0ADoYuABzAxNTQGNrG38g7nDuKDoATy4I9CxcAmIyAFoAZlzQ5ABDKFQhel1ZEIEOnTgxGDA8KGbINDhBbS7S+WQo2ITOgdIAA0AKhkBLhkAfhjdALzdAfFdAdQZvI8B9BiYAEk5lunjKNDw8ZuS0UNXcvnD8yOHFxJSBkAMfqALN9AHYMgDPFQBgLtkAsFuAB6BGIQBfioBspUACr6AHPMmFtdocTucmOlLLZHK4PD5fIjkaDITDfEA
