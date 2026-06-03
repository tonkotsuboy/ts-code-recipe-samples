function validateInput(value) {
  if (typeof value !== "string") {
    throw new TypeError("文字列が必要です");
  }
  if (value.length > 100) {
    throw new RangeError("文字列は100文字以下である必要があります");
  }
}
try {
  validateInput(123); // TypeError: 文字列が必要です
} catch (error) {
  if (error instanceof Error) {
    console.log(error.name); // "TypeError"
    console.log(error.message); // "文字列が必要です"
  }
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/GYVwdgxgLglg9mABANwIYBsYBNVQKYCSYADiFABRroh4CUiA3gFCKIzCLlQCexecHKjUQBCALxjEAIgDOUAE4wwAcyn1mrVlAAW8uAHdEYPIYAqvPAFF5e+eSmBw00Dq2oHQlQDIMgUf1AgZGBzBkCaDGoA3CyIAL4h7JxCeAB06HgqOogAfIgAjAAMGeohWroGRiaIAEqoKlY2cHaOroD2DJkZzoCncoDQcj6AQgyA0Qzebu2AUQyAfgwBtMGs4eEK3IwhVNi4hCRk5GkATADMI4gA9FuI5nzWtgBciM7u3v5MoYgQuBDanHiV8jmskeRPtmxgcmUQ-BxDlVXpoIAgZHB4nE4MoPs8YmBUABbOiBba7KT7Cq2KS5G7gyGxdAwuG2GIomQyVDKVHo6RnTy+AIhcZAA
