function checkPositive(number: number) {
  if (number < 0) {
    throw new Error("数値は0以上である必要があります");
  }
  console.log("数値は正です");
}

try {
  checkPositive(-3);
  console.log("処理が正常に完了しました");
} catch (error) {
  console.error("エラーが発生しました", error);
} finally {
  console.log("クリーンアップ処理を実行します");
}
console.log("後続の処理です");
// エラーが発生しました → クリーンアップ処理を実行します → 後続の処理です

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABBAFgUwgawApwM4ywBuaAFGCALYBGaATgFyIU30CUiA3gFCKIzBE5KrTqIAPIgAMHHnz5QUdOAHdmaNQFE6yuqQBEgB1NAJAqB7BimBTuUBQcoHMGQEIMgaIZAo-qBAyMAyDHcBRDID8GQJoM+tgBuXkQAXxCIBDw4ABs0ADoYuABzAxNTQGNrG38g7nDuKDoATy4I9CxcAmIyAFoAZly+SLBouMSUg0AzxUAwFzcMwA49QGsGQBjtQDC5QHUGb3HAfQYA4NDkAEMoVCF6XVkIqNiE9bg9fUAKhkBLhkAfhjdALzdAfFdJmf0AGkQ9ulyF4BgwRZiYkrlkbbaSVS+kA9QyAK4ZToBnhkARQyAYYZAOsMPUASQyAfO1ADIRkxy824zVaCSBBkAMfqALN9AHYMPWyc24AHpqYgTudrrdpohAEmEiHBULhiO6qIxfjZiBJ5O62SAA
