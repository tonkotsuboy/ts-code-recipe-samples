function logPoint([x, y]: [number, number]): void {
  console.log(`(${x}, ${y})`);
}

logPoint([100, 200]); // (100, 200)
logPoint(["鈴木", "田中"]); // エラー
logPoint([1, 2, 3]); // エラー

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAGzgcwApxmKAKAbQA8AaRATwF0AuRAsEAWwCMBTAJzIZY8oEpaAN2wATRAG8AUIkQQEAZzjJWAOlRo8AAzwAScUQC+ZPeQN9NfANySDkyeqw58BAIwAGN2QBMH-pcQA9AGIeO6eiD5ufPbojriEAESALEmAFOYJZAmADK6AtHIJfoHBgBUMgJcMgD8MMZjY8a7eZADM+UGIJaVAA
