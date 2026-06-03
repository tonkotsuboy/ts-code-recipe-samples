class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function processData(data: unknown) {
  if (data == null) {
    throw new ValidationError("データが空です");
  }
  if (typeof data !== "object") {
    throw new TypeError("データはオブジェクトである必要があります");
  }
  return data;
}

function handleError(error: unknown) {
  if (error instanceof ValidationError) {
    console.log(`バリデーションエラー: ${error.message}`);
    return;
  }
  if (error instanceof TypeError) {
    console.log(`型エラー: ${error.message}`);
    return;
  }
  if (error instanceof Error) {
    console.log(`その他のエラー: ${error.message}`);
    return;
  }
  console.log("不明なエラーが発生しました");
}

// 使用例
try {
  processData(null);
} catch (error) {
  handleError(error); // "バリデーションエラー: データが空です"
}

try {
  processData("invalid");
} catch (error) {
  handleError(error); // "型エラー: データはオブジェクトである必要があります"
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAEBqYgJYBMwBdEHsB2BRATvpvtAKYAeap2yMBRJA3gFDTTA4Rr4CuwaxABQBbUlDABzUgC5oXfImwSAlNBZs2EHgAdS+EWIiTSygNysNaABaIIAOmxhR0ALzQARPCSoMOesXdzNgBfZlDmADMebH4sbGhtImBDABF0MEEfMFlogGtsTAB3bFV1aEQI6Ez01zdsHhAQUos2ayJC6GxSDq8UdDj-fXdAcYZAH4ZAfoZAGQZALy9AcwZATQZ3MwtQtgqqtABPXUxKrOgAQhc3d0wAIwArUn4ltRboNqLO7ugAFW3SQcERicB7BkAqhkAawyADoZAOUMgHqGQATDLNAEIMgGiGQCj+oBAyMmMMAUQyAPwZFssQhZ8KQ0Dx8PEsuZwlEYr54lYwDQQJ9CEI9Awcth8kUSnc1pVBMziOVsFxacldnAEH0qYNmhp2JxMPS7CBMBJBAADQALDIArhjGgHaGQDnDIBnhkAFQyAS4ZRrIACSMPn4OyicRSYKqnEafGE4lBaCrco8m0CoUxUii966KVcjQcQXy0iK5VqwDR6qbzdArTa7YZjE6XWw3UTsJ7veteYySIoAyLKmGymxIxBo7GVarALoMgDsGQBrci2k5brSX0w7SFnPTmCXmCxZa-WlSr3IBYOUAcGaAKwYk5NAF5ugHxXQDqDBiN4B9BiWZOYzAA9EfoIB-eUAFK6AaPlmNxNuHEphklA0mgMvVGstgux0MArFUbWlaAaTpBkGGLBgzGgE8PC1XVDS7aAximOZFjCQ87wfJJUnSb5FAAN3FZB9zCH80D-ACSyAkDkHpL5ANMaDT3cRMzVkZCARBCFoXhZFUUxNDgiAA
