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
