function calculateTotal(price: number, tax: number): string {
  return `税込み${Math.round(price * tax)}円です`;
}
const total = calculateTotal(100, 1.1);
console.log(total); // 出力: 税込み110円です
