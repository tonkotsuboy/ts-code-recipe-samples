function logMessage(message: string | null | undefined): void {
  console.log(message ?? "デフォルトメッセージ");
}

logMessage("こんにちは"); // こんにちは
