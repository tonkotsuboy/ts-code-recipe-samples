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
