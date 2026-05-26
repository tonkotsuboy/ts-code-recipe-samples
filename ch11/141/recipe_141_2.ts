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
