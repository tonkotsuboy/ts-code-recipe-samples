// noImplicitReturns: true で、一部の分岐に return が抜けているとコンパイルエラーになります。
// 期待エラーコード: TS7030 - Not all code paths return a value.
export function getDiscount(price: number, isSale: boolean) {
  if (isSale) {
    return price * 0.9;
  }
  // 'else'分岐がないため、isSaleがfalseの場合に戻り値がなく、エラーとなる
}
