try {
  const originalError = new Error("元となるエラーです");
  throw new Error("新しいエラーメッセージ", { cause: originalError });
} catch (error) {
  console.error(error);
  if (error instanceof Error && error.cause instanceof Error) {
    console.error("原因:", error.cause.message);
  }
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/C4JwngBA3gUBEGMD2A7AzsCSQEsDmOKAhgDYCiII2EAvBCgKYDuEFVIAFAESDCioBYMgKwZA0QyAKhkCXDIB+GQOYMgTQYuASgDccCMAAWVFoxZts3QA2mgdQZAIgziJgQ4ZAwwyBuhgmAOhi4AaaIiIBXNAwBcWXAWLklNQAvkowwa7ACGoQHAxBIPLQKsjoSCQMAHTx7HEJYfA4AGaxOdSEGEQoCAxIJbogEABkTRBlIJkI7p4QFcBVNXWs+cnw8Klo6Vnt3ID5yoAHal5ObQmd3VkAtgxoaER4DAUQweFAA
