function logFruits(...fruits: string[]): void {
  console.log(fruits);
}
logFruits(["りんご", "バナナ", "みかん"]);
// コンパイルエラー：
// Argument of type 'string[]' is not assignable to parameter of type 'string'
