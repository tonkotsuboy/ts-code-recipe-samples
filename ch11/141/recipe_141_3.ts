// カスタムプロパティを持つ AgeValidationError の例。
class AgeValidationError extends Error {
  age: number;
  constructor(message: string, age: number) {
    super(message);
    this.name = "AgeValidationError";
    this.age = age;
  }
}

function validateAge(age: number) {
  if (age < 0 || age > 120) {
    throw new AgeValidationError(
      "年齢は0以上120以下である必要があります",
      age,
    );
  }
  console.log(`年齢は ${age} 歳です`);
}

try {
  validateAge(-5);
} catch (error) {
  if (error instanceof AgeValidationError) {
    console.error(`エラー: ${error.message}`);
    console.error(`入力された年齢: ${error.age}`);
  }
}
// エラー: 年齢は0以上120以下である必要があります, 入力された年齢: -5
