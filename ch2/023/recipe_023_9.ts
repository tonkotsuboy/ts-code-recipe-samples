function callGreet(greet: (() => string) | undefined) {
  return greet?.();
}
console.log(callGreet(() => "こんにちは")); // "こんにちは"
console.log(callGreet(undefined)); // undefined
