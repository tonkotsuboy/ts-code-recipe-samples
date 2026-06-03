class BankAccount {
  #balance = 1000;
}

const account = new BankAccount();
account.#balance;
// エラー: Property '#balance' is not accessible outside class
// 'BankAccount' because it has a private identifier.

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAEBCYDsDWBBYwD2BXBAXaA3gFDTQDEARmOAsAKbQC80AjAAwcDcRAvkUZgQR8YdNjxNoCOgHc4iVGJy4AFAEpuozMoB0laonrcA9MeiAKhkCXDIB+GAFzQACgCcMABzpPcAT2gByfTT0vtAAljAIGCLodFAhFCAM2LgQIQAmDKCQEESmfvDIaNp4wRR0wGBYEAwh+AAWkNBg0K5OIQBuYLjV6XghAGYhHjpAA
