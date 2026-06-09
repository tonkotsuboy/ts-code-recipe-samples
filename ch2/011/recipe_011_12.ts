let value; // evolving any

value = "hello";
value.toUpperCase(); // OK: string型として扱われる

value = 42;
value.toFixed(2); // OK: number型として扱われる
value.toUpperCase(); // エラー: number型にtoUpperCaseは存在しない

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/DYUwLgBAbghsCuIDcED0qIige2FAlgHYDmEMhAngFBWwIgQC8EARABYjDDYtK1yIAdGGwBVAA7iQAJwDCMAM4gAFAEoU6CAHkA0gC4ICsNKLFA0eqALBkDqDIDMGQI5GgeIZAMQyBohhp1ETCABYATHw8QYWwAMXwADxAAE2VfdTQMXQNCeABbACMZS1tHV356YIkpOUUVeM1ACoZAS4ZAH4ZktMzpM0BrBhEimXklQHsGQA1tQAp1K0ArBkARBiA
