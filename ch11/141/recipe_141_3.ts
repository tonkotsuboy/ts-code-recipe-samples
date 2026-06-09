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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAECCDmBTAamEBLAJmALug9gHYCiATqfqdIgB46KGYxkVUDeAUNNGEgFzRCAVwC2AI0SkA3F2jAiEHKSHAclABQjEUXogGLS6QvAA0PfoNETSASmidu3CEIAOkzdoi6bMx9BwAFugQAHSEYFrQALzQAEQIKGhYuAQk5JSxvo6BwSG60eaIWQC+HKUcAGZChKqp0ABuSdj0Ceq6AsLiknYO0OgV0G1I0AA80AAM0AA+U4XQAHzQAIwATOM9styBFADugoh7CagYzaksGpuOsYAueoBG+YD2DOOAp3KAUHKrz4DQcoDmDIBCDIDRDIBR-UAgZGAGQYfoAohkAfgyATQZYiZLtxdPC-D5ZKVuPJCBB8CBECEQPh4OoAAZ3e7QAAkbF0xWggGdrL7Q4mo8pKACe9lkjROuEQrQAtABWFlyXDAAKDSSsDbcfqS9JUIyKMA1RD4AZHJopIjnWycvyY7G4kJSjTEwAVDIBLhkAPwwCKmm0ghLQ6JDFZlZDEKHF4h0kwCmioBspUAqgyAGIZAPoMdztbAdeVd7rRZQ4AHok9ArbboGTnm81k9vv9gWCodCzIHQxHbgIhUA
