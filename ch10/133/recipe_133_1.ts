function greeting(): string {
  return "Hello, TypeScript!";
}

type GreetingResult = ReturnType<typeof greeting>;
// string型が抽出される

const result: GreetingResult = greeting();
console.log(result);
