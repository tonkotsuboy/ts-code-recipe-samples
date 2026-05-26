function logMessage(message: string | null | undefined): void {
  console.log(message ?? "デフォルトメッセージ");
}

logMessage(null); // デフォルトメッセージ
logMessage(undefined); // デフォルトメッセージ
