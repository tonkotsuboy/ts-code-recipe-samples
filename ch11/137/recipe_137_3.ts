function greet(name: string) {
  return `Hello, ${name}`;
}

const result = greet(123);
// Argument of type 'number' is not assignable to parameter of type 'string'
console.log(result);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAcwE4FN1QBRgIYC26AXIgM5SoxjICUiA3gFCKIZQipIAGAEugBsBcADSIAJA3xEAvtwDcTGUyYQEFNujIgBURAF4UGLNgCMAJgDMtRQHpbiAIKpkIImD1xgiKAE8ADuiIAORgbgBG6KjBiDBkiGBwenhkZDDI+OECQVBwiP54qIRYUYhePgFBwRRUNMGq6nDZAHTCyNgY2ro2QA
