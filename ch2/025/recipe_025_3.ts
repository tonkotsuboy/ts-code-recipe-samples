function setDefaultValue(input?: number) {
  input ||= 999;
  console.log(`結果: ${input}`);
  return input;
}

setDefaultValue(); // 結果: 999（undefinedはfalsy）
setDefaultValue(0); // 結果: 999（0はfalsy）
setDefaultValue(42); // 結果: 42（truthyなので変更されない）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAZwKZQCKuAQxAGygDUd8RUAKGMABxCgH4AuRMEAWwCNUAnASkQBvAFCJE1OlEQAfaQF5EATmUBuUYggJkcfKgB0+OAHMKAA0AKvoBzzFgBJBE+gF9TfNWJ7oQPJA6hrHwsJomNh4hCRklK6IAPQxiFYsyoqAEP-gACbY1KjpgPYMuPjIAJ6AkP9B6Fi4BMSk5BQADNFxCdZKyin1+aTFZcGVYTWRFAAsAExN8YmIYylQPPQAFkWAVgyAdgyA5gyAkJqAL2aAqgyAMQzLgCIMJUA
