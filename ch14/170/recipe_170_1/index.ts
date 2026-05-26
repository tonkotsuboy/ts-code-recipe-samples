export function getDiscount(price: number, isSale: boolean) {
  if (isSale) {
    return price * 0.9;
  }
  // 'else'分岐がないため、isSaleがfalseの場合に戻り値がなく、エラーとなる
}
