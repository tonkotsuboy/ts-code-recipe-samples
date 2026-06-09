function checkPositive(number) {
  if (number <= 0) {
    throw new Error("数値は正である必要があります");
  }
  console.log("数値は正です");
}

try {
  checkPositive(5); // 数値は正です
} catch (error) {
  console.error(error);
}

try {
  checkPositive(-1); // Error: 数値は正である必要があります
} catch (error) {
  console.error(error);
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/GYVwdgxgLglg9mABBAFgUwgawApwM4ywBuaAFGCALYBGaATgJSIDeAUIojMIuVbXYgA8AXkQAGJmw4coKOnADuiMGiUBROvLqkARIAdTQCQKgewZAxtaBzBkBCDIGiGQKP6gQMjAMgwXAUQyA-BkCaDDoYBudogC+fhAIeHAANmgAdGFwAOa6hqZmnj6sgaxQdACeLEHoWLgExGQArD6IAPQViInm7mnIAIZQqDz0WpJBIeFR7XDafYy+6Zk5Usj5OPiEMCSkALQAjOVViBpaAFw1xubW9k5u9f5NLShtmv2dHMFgoRGRg6SDqf5AA
