function calculateTaxIncluded(amount: number | string = 0) {
  const value =
    typeof amount === "string" ? parseFloat(amount) : amount;
  return value * 1.1; // 税込み金額を計算
}

// 各ケースで使用可能
console.log(calculateTaxIncluded(1000)); // 1100.0000000000002
console.log(calculateTaxIncluded("2000")); // 2200
console.log(calculateTaxIncluded()); // 0（初期値が使われる）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABBAhgGwiNKoFMAqKAHgJKRogAmulAFCgLZzhQBciYIDARrgE6IAPogDOUPjDABzRAF5EABgCUiAN4AoRMgRjEAN3QhcczVsRQAngAdccYIkbMwUObPkAiMROnvEAfkQrFD4RXAAxNDgceiYWFXZHFgBuUz5cKBA+JAMKYwAqRABGADpCpMQAegrEQDgvQB74wH8GQEXEwFkMwCSGQAgowHTvdQBfdXUqxEAQFUBGhkAfhkBOhkBzBkB-eUAKV0B75UBfgPUIHTg0XGLIqVpUDCwcAmIyCApqOkKFG6UlcqHC64Vim7f3t4AmNY2tnbg9gdMNg8IRSOQqDRaO5Pm93HcHtVPrCFD8wCJNttdvt0MDjmCzhcoQjKtUFIAIf8AuEqAfHNACQKgBkGWaAeIZADEMgGiGQCQ-0A
