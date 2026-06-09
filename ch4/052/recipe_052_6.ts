function maskSensitiveInfo(input: string): string {
  return input.replace(/(\d{4})\d{8}(\d{4})/, "$1****$2");
}

console.log(maskSensitiveInfo("1234567890123456"));
// "1234****3456"

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABAWwIYGcDWBlApmdGWAN1wEkxg4AKGMABxCgC5F0oAnOgcwEpX2XMN0QBvAFCJEHXFBAckdRlAB0M+gBtUEXNQD01ADoATUQBYAvrxOiAHBaOnLvPQBpEAIgAkARgBUAX5eAEwevADc4hbi4hAI6HAauCoacNzUaFh4BEQwpBRU1B4+wQDMZgCsAGwA7LYAnAAMJeXVYRHienqeLWaBfq1VHkA
