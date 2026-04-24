// コンパイルエラーの例（意図的な型エラーデモ）
function greet(name: string) {
  return `Hello, ${name}`;
}

const result = greet(123);
// Argument of type 'number' is not assignable to parameter of type 'string'
console.log(result);
