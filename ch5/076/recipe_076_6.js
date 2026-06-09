const objectWithFunction = {
  name: "test",
  func: () => console.log("hello"),
};

// 関数を含むオブジェクトをコピーしようとするとDataCloneErrorエラー
try {
  structuredClone(objectWithFunction);
} catch (error) {
  console.log(error instanceof Error ? `${error.name}: ${error.message}` : error);
  // DataCloneError: ...
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBCBGArApsKB1AllAFgMQFcw1NwYBeGAbwCgYYwBDAW2QC4YAiKZaTgGjowAZkWAcAFAEoKAPhihIIADbIAdMpABzCZxzJlmzlMEBfANw0aAemsxARamAHU0BJDIGoVQAEMgKoZAawyAOhkDlDID1DIATDM6AzQyAKwyAPwyA6gyAEQyAYgyAFgyAmgyA0QxJACKMUIwAwppgyACiAE6lIKWAFQyAlwxRNFClAJ7UQtClBGgEpcgAJgXgyBIIKGhYuITEUKRgUpamCjnAODASyOWVMrT0ihAq6po66xWlMJiQucTIIMIwZScwAPwwAAYAJFTHlWpMrKYcHy+pTUrAgEEYWmQpheMA4QLmQlsMGyuQGRXulQ4amxNFMQA
