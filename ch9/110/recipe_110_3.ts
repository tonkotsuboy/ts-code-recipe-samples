class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

const error = new ValidationError("バリデーションエラー");
console.log(error instanceof ValidationError); // true
console.log(error instanceof Error); // true
