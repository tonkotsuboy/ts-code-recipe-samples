function calculateTotal(numbers: readonly number[]): number {
  // numbers.push(10); // エラー
  return numbers.reduce((sum, num) => sum + num, 0);
}
