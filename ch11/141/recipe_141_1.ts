class ValidationError extends Error {
  constructor(message: string) {
    super(message); // 親クラスのErrorにメッセージを渡す
    this.name = "ValidationError"; // エラーの種類を設定
  }
}

function validateAge(age: number) {
  if (age < 0 || age > 120) {
    throw new ValidationError("年齢は0以上120以下である必要があります");
  }
  console.log(`年齢は ${age} 歳です`);
}

try {
  validateAge(25); // 年齢は 25 歳です
} catch (error) {
  console.error(error);
}

try {
  validateAge(-1); // ValidationError: 年齢は0以上120以下である必要があります
} catch (error) {
  console.error(error);
}
