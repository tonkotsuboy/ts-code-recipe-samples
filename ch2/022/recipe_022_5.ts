function logCount(count: number | null | undefined): void {
  console.log(count ?? -1);
}

logCount(0); // 0

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABAGzgcwMJ3FAFBbMKALkTBAFsAjAUwCdEAfMkZZJxcAExuBjBpcAlKQBucGF0QBvAFCJEBMAGc4yGgDpUafISiIA-AcQBaAIxCA3LIC+s2dqw5cABiuIA9B8QugA
