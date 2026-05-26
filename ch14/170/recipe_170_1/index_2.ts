export function getDiscount(price: number, isSale: boolean) {
  if (isSale) {
    return price * 0.9;
  }
  return price;
}
