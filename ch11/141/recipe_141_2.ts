// instanceof で ValidationError を判別する例。
// 書籍では recipe_141_1.ts で定義した ValidationError / validateAge を前提とするため、
// 単体実行できるようこのファイル内で再定義しています。
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
