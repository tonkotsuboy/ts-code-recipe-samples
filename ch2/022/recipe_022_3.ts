function logMessage(message: string | null | undefined): void {
  console.log(message ?? "デフォルトメッセージ");
}

logMessage(null); // デフォルトメッセージ
logMessage(undefined); // デフォルトメッセージ

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAGzgcwLIFMDOOCGaWAFALa4FEBciOUATjGGogD6JgjLJuLgAmWYEyz8AlDQBucGP0QBvAFCJEEBDjjIsAOlRoyFQlkQB+E4gBEgcYZAqwyBKhkDXDIAmGQIcMgYYZA3QyAfhkAdDBbEA3IoAvoqKeth4RsSc3IGIAPQJiLaOrp6+4eiRlCQCQiLiAYnJqc7u3j5AA
