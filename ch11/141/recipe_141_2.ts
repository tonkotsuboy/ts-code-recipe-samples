class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age: number) {
  if (age < 0 || age > 120) {
    throw new ValidationError("年齢は0以上120以下である必要があります");
  }
  console.log(`年齢は ${age} 歳です`);
}

try {
  validateAge(-1);
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`年齢バリデーションエラー: ${error.message}`);
  } else {
    console.error(error);
  }
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAEBqYgJYBMwBdEHsB2BRATvpvtAKYAeap2yMBRJA3gFDTTA4Rr4CuwaxABQBbUlDABzUgC5oXfImwSAlNBZs2EHgAdS+EWIiTSygNysNaABaIIAOmxhR0ALzQARPCSoMOesXdzNgBfZlDmADMebH4sbGgANwQUdFIAQSlBY1lsHmEAIz1VdWhECOgsqWgAHmgABmgAH0boY2gAPmgARgAmOuKLNmsiAHdobFIxrxTfPEIhd0AXPUAjfMB7BjrAU7lAKDlezcBoOUBzBkAhBkBohkBR-UBAyMAZBiPAKIZAPwZATQZ3MwtQtg5sCEwQUjsQTASQQAAxWq2gABJGMZgtBAM7WB0ewNe4W4AE81BYkt5UhlSIIALRdFHsdDAKwVPQMAZsMqU+YkRRcMAxUiYcrTHxxfz4GkaT7fX52KlCUHLQALDIArhkA4wyAH4ZAO0MgHOGQDPDIAKhkAlwyy2RQkX4OyicRSYLIoLQWGkEAQUiYjTsTg-P66wS614hMJAA
